import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_KANBAN_STRUCTURE, ALL_ONBOARDING_TASKS } from '../constants';
import { KanbanColumn, OnboardingTask } from '../types';
import { Plus, Trash2, GripVertical, ListPlus, RotateCcw, ChevronDown, Pencil, Sparkles } from 'lucide-react';

// Fisher-Yates Shuffle Algorithm
const shuffleArray = (array: OnboardingTask[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const OnboardingKanban: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumn[]>(ONBOARDING_KANBAN_STRUCTURE);
  // Initialize with shuffled tasks
  const [poolTasks, setPoolTasks] = useState<OnboardingTask[]>(() => shuffleArray(ALL_ONBOARDING_TASKS));
  
  const [newTaskContent, setNewTaskContent] = useState("");
  const [newTaskTag, setNewTaskTag] = useState<'Líder' | 'TBP' | 'Equipo' | 'Talento'>('Líder');
  const [isComplete, setIsComplete] = useState(false);
  const [dragOverCol, setDragOverCol] = useState<string | null>(null);
  
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Reset local storage if version changed or if structure is empty/mismatched to new task list
    const savedCols = localStorage.getItem('fyo_kanban_cols_v9');
    const savedPool = localStorage.getItem('fyo_kanban_pool_v9');
    
    if (savedCols) setColumns(JSON.parse(savedCols));
    if (savedPool) {
        // If loading from save, use saved order
        setPoolTasks(JSON.parse(savedPool));
    } else {
        // If fresh start, ensure shuffled
        setPoolTasks(shuffleArray(ALL_ONBOARDING_TASKS));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fyo_kanban_cols_v9', JSON.stringify(columns));
    localStorage.setItem('fyo_kanban_pool_v9', JSON.stringify(poolTasks));
    
    const hasTasksInBoard = columns.some(c => c.tasks.length > 0);
    const poolEmpty = poolTasks.length === 0;
    if (poolEmpty && hasTasksInBoard) setIsComplete(true);
    else setIsComplete(false);
  }, [columns, poolTasks]);

  useEffect(() => {
    if (editingTaskId && editInputRef.current) {
        editInputRef.current.focus();
    }
  }, [editingTaskId]);

  const handleDragStart = (e: React.DragEvent, taskId: string, sourceColId: string) => {
    if (editingTaskId) return;
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('sourceColId', sourceColId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnter = (e: React.DragEvent, colId: string) => {
      e.preventDefault();
      setDragOverCol(colId);
  }

  const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
  }

  const handleDrop = (e: React.DragEvent, destColId: string) => {
    e.preventDefault();
    setDragOverCol(null);
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColId = e.dataTransfer.getData('sourceColId');

    let task: OnboardingTask | undefined;

    if (sourceColId === 'pool') {
        task = poolTasks.find(t => t.id === taskId);
        if (task) {
            setPoolTasks(prev => prev.filter(t => t.id !== taskId));
        }
    } else {
        const sourceCol = columns.find(c => c.id === sourceColId);
        task = sourceCol?.tasks.find(t => t.id === taskId);
        if (task && sourceColId !== destColId) {
            setColumns(prev => prev.map(c => 
                c.id === sourceColId ? { ...c, tasks: c.tasks.filter(t => t.id !== taskId) } : c
            ));
        }
    }

    if (task && sourceColId !== destColId) {
        if (destColId === 'pool') {
            setPoolTasks(prev => [...prev, task!]);
        } else {
             setColumns(prev => prev.map(c => 
                c.id === destColId ? { ...c, tasks: [...c.tasks, task!] } : c
            ));
        }
    }
  };

  // Allow dropping back to pool
  const handlePoolDrop = (e: React.DragEvent) => {
      handleDrop(e, 'pool');
  }

  const addTask = () => {
    if (!newTaskContent.trim()) return;
    const newTask: OnboardingTask = {
        id: Date.now().toString(),
        content: newTaskContent,
        tag: newTaskTag
    };
    setPoolTasks([...poolTasks, newTask]);
    setNewTaskContent("");
  };

  const deleteTask = (taskId: string, colId: string) => {
    if (colId === 'pool') {
        setPoolTasks(prev => prev.filter(t => t.id !== taskId));
    } else {
        setColumns(prev => prev.map(c => 
            c.id === colId ? { ...c, tasks: c.tasks.filter(t => t.id !== taskId) } : c
        ));
    }
  };

  const startEditing = (task: OnboardingTask) => {
      setEditingTaskId(task.id);
      setEditContent(task.content);
  };

  const saveEdit = (taskId: string, colId: string) => {
      if (!editContent.trim()) return;
      if (colId === 'pool') {
          setPoolTasks(prev => prev.map(t => t.id === taskId ? { ...t, content: editContent } : t));
      } else {
          setColumns(prev => prev.map(c => 
              c.id === colId ? { ...c, tasks: c.tasks.map(t => t.id === taskId ? { ...t, content: editContent } : t) } : c
          ));
      }
      setEditingTaskId(null);
  };

  const resetBoard = () => {
    if (confirm('¿Reiniciar el examen?')) {
        setColumns(ONBOARDING_KANBAN_STRUCTURE);
        // Shuffle on reset
        setPoolTasks(shuffleArray(ALL_ONBOARDING_TASKS));
        setIsComplete(false);
        // Clear local storage for reset
        localStorage.removeItem('fyo_kanban_cols_v9');
        localStorage.removeItem('fyo_kanban_pool_v9');
    }
  };

  const getTagColor = (tag: string) => {
      switch(tag) {
          case 'Líder': return 'bg-purple-100 text-purple-700 border-purple-200';
          case 'TBP': 
          case 'Talento': return 'bg-blue-100 text-blue-700 border-blue-200';
          case 'Equipo': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
          default: return 'bg-slate-100 text-slate-700';
      }
  };

  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-[90rem] mx-auto w-full px-6 pt-4 md:pt-0 relative">
      
      {isComplete && (
         <>
            <div className="confetti bg-purple-500 left-[10%]" style={{ animationDelay: '0s' }}></div>
            <div className="confetti bg-pink-500 left-[50%]" style={{ animationDelay: '0.5s' }}></div>
         </>
      )}

      <div className="shrink-0 mb-4 flex flex-col lg:flex-row justify-between items-end gap-2">
        <SectionHeading 
          title="EXAMEN SORPRESA 😈" 
          subtitle="Vamos a ver si prestaste atención. Si querés liderar, tenés que saber priorizar. Ordená las acciones donde corresponden."
        />
        <button 
            onClick={resetBoard}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-200 rounded-xl transition-all text-xs font-bold shadow-sm"
        >
            <RotateCcw className="w-3.5 h-3.5" />
            Reiniciar
        </button>
      </div>

      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-4 lg:gap-8 pb-2 overflow-hidden items-stretch">
        
        {/* TASK POOL */}
        <div 
            className={`lg:w-1/4 flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden shrink-0 h-1/3 lg:h-auto transition-colors duration-300
             ${dragOverCol === 'pool' ? 'ring-2 ring-purple-400 bg-purple-50' : ''}`}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => handleDragEnter(e, 'pool')}
            onDragLeave={handleDragLeave}
            onDrop={handlePoolDrop}
        >
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 backdrop-blur-sm">
                <h3 className="font-brand font-black text-slate-900 flex items-center gap-2 mb-3 text-sm uppercase tracking-wide">
                    <ListPlus className="w-4 h-4 text-purple-600" />
                    Banco de Tareas
                </h3>
                
                <div className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        value={newTaskContent}
                        onChange={(e) => setNewTaskContent(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTask()}
                        placeholder="Nueva tarea..."
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white shadow-sm"
                    />
                    <div className="flex gap-2">
                         <div className="relative flex-1">
                            <select 
                                value={newTaskTag}
                                onChange={(e) => setNewTaskTag(e.target.value as any)}
                                className="w-full appearance-none px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 bg-white focus:outline-none cursor-pointer shadow-sm"
                            >
                                <option value="Líder">Líder</option>
                                <option value="Talento">Talento</option>
                                <option value="Equipo">Equipo</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        </div>
                        <button onClick={addTask} className="px-3 bg-slate-900 text-white rounded-xl hover:bg-purple-600 transition-colors shadow-sm">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 p-3 overflow-y-auto space-y-2 custom-scrollbar bg-slate-50/30">
                {poolTasks.map(task => (
                    <div 
                        key={task.id} 
                        draggable={editingTaskId !== task.id}
                        onDragStart={(e) => handleDragStart(e, task.id, 'pool')}
                        className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm cursor-grab active:cursor-grabbing group hover:border-purple-300 hover:shadow-md transition-all flex justify-between items-start relative overflow-hidden"
                    >
                         {/* Side Color Bar */}
                         <div className={`absolute left-0 top-0 bottom-0 w-1 ${getTagColor(task.tag).split(' ')[0]}`}></div>

                         {editingTaskId === task.id ? (
                             <input 
                                ref={editInputRef}
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                onBlur={() => saveEdit(task.id, 'pool')}
                                onKeyDown={(e) => e.key === 'Enter' && saveEdit(task.id, 'pool')}
                                className="w-full text-xs font-medium text-slate-700 bg-purple-50 p-1 rounded focus:outline-none ml-2"
                             />
                         ) : (
                            <div className="flex items-start gap-3 w-full pl-2">
                                <div className="flex-1" onDoubleClick={() => startEditing(task)}>
                                    <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md mr-2 align-middle border ${getTagColor(task.tag)}`}>
                                        {task.tag}
                                    </span>
                                    <span className="text-xs font-bold text-slate-700 leading-snug block mt-1">{task.content}</span>
                                </div>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => startEditing(task)} className="text-slate-300 hover:text-purple-600">
                                        <Pencil className="w-3.5 h-3.5" />
                                    </button>
                                    <button onClick={() => deleteTask(task.id, 'pool')} className="text-slate-300 hover:text-red-500">
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                         )}
                    </div>
                ))}
            </div>
        </div>

        {/* KANBAN COLUMNS */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 h-full overflow-y-auto lg:overflow-visible">
            {columns.map((column, colIndex) => {
                // Distinct backgrounds for columns
                const colColors = [
                    'bg-slate-100/50 border-slate-200', // Pre
                    'bg-blue-50/50 border-blue-100', // Day 1
                    'bg-purple-50/50 border-purple-100' // Follow up
                ][colIndex];

                return (
                <div 
                    key={column.id} 
                    className={`
                        rounded-3xl p-1.5 flex flex-col h-full border transition-all duration-300 min-h-[150px] relative
                        ${colColors}
                        ${dragOverCol === column.id ? 'ring-2 ring-purple-400 bg-white shadow-xl scale-[1.02] z-10' : ''}
                    `}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => handleDragEnter(e, column.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, column.id)}
                >
                    <div className="p-4 flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl filter drop-shadow-sm">{column.emoji}</span>
                            <h3 className="font-brand font-black text-slate-900 text-sm uppercase tracking-wide">
                                {column.title}
                            </h3>
                        </div>
                        <span className="bg-white/80 px-2 py-0.5 rounded-lg text-[10px] font-bold text-slate-500 shadow-sm border border-slate-100">
                            {column.tasks.length}
                        </span>
                    </div>

                    <div className="flex-1 space-y-2 overflow-y-auto px-2 pb-2 custom-scrollbar">
                        {column.tasks.map((task) => (
                            <div 
                                key={task.id} 
                                draggable={editingTaskId !== task.id}
                                onDragStart={(e) => handleDragStart(e, task.id, column.id)}
                                className="bg-white p-3 rounded-xl shadow-sm border border-slate-200/60 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10 cursor-grab active:cursor-grabbing group relative transition-all overflow-hidden"
                            >
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${getTagColor(task.tag).split(' ')[0]}`}></div>
                                
                                {editingTaskId === task.id ? (
                                    <input 
                                        ref={editInputRef}
                                        value={editContent}
                                        onChange={(e) => setEditContent(e.target.value)}
                                        onBlur={() => saveEdit(task.id, column.id)}
                                        onKeyDown={(e) => e.key === 'Enter' && saveEdit(task.id, column.id)}
                                        className="w-full text-xs font-medium text-slate-700 bg-purple-50 p-1 rounded focus:outline-none ml-2"
                                    />
                                ) : (
                                    <div className="pl-2">
                                        <div className="flex justify-between items-start mb-1.5">
                                            <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${getTagColor(task.tag)}`}>
                                                {task.tag}
                                            </span>
                                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => startEditing(task)} className="text-slate-300 hover:text-purple-600">
                                                    <Pencil className="w-3.5 h-3.5" />
                                                </button>
                                                <button onClick={() => deleteTask(task.id, column.id)} className="text-slate-300 hover:text-red-500">
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-slate-700 text-xs font-bold leading-tight" onDoubleClick={() => startEditing(task)}>
                                            {task.content}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                        {column.tasks.length === 0 && (
                            <div className="h-24 border-2 border-dashed border-slate-300/50 rounded-xl flex items-center justify-center">
                                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest opacity-50">Soltá aquí</span>
                            </div>
                        )}
                    </div>
                </div>
            )})}
        </div>
      </div>
    </section>
  );
};