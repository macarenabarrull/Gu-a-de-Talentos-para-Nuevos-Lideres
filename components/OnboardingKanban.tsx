import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_KANBAN_STRUCTURE, ALL_ONBOARDING_TASKS } from '../constants';
import { KanbanColumn, OnboardingTask } from '../types';
import { Plus, Trash2, GripVertical, ListPlus, RotateCcw, ChevronDown } from 'lucide-react';

export const OnboardingKanban: React.FC = () => {
  // Init empty board structure
  const [columns, setColumns] = useState<KanbanColumn[]>(ONBOARDING_KANBAN_STRUCTURE);
  // Init pool with ALL tasks
  const [poolTasks, setPoolTasks] = useState<OnboardingTask[]>(ALL_ONBOARDING_TASKS);
  
  const [newTaskContent, setNewTaskContent] = useState("");
  const [newTaskTag, setNewTaskTag] = useState<'Líder' | 'TBP' | 'Equipo'>('Líder');
  const [isComplete, setIsComplete] = useState(false);
  const [dragOverCol, setDragOverCol] = useState<string | null>(null);

  // Load state or Defaults
  useEffect(() => {
    const savedCols = localStorage.getItem('fyo_kanban_cols_v4');
    const savedPool = localStorage.getItem('fyo_kanban_pool_v4');
    
    if (savedCols) setColumns(JSON.parse(savedCols));
    if (savedPool) setPoolTasks(JSON.parse(savedPool));
  }, []);

  // Save state
  useEffect(() => {
    localStorage.setItem('fyo_kanban_cols_v4', JSON.stringify(columns));
    localStorage.setItem('fyo_kanban_pool_v4', JSON.stringify(poolTasks));
    
    // Check if pool is empty and columns have items (simple gamification check)
    const hasTasksInBoard = columns.some(c => c.tasks.length > 0);
    const poolEmpty = poolTasks.length === 0;
    if (poolEmpty && hasTasksInBoard) setIsComplete(true);
    else setIsComplete(false);

  }, [columns, poolTasks]);

  const handleDragStart = (e: React.DragEvent, taskId: string, sourceColId: string) => {
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

    if (task) {
        setColumns(prev => prev.map(c => 
            c.id === destColId ? { ...c, tasks: [...c.tasks, task!] } : c
        ));
    }
  };

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

  const resetBoard = () => {
    if (confirm('¿Reiniciar el tablero? Todas las tareas volverán al banco.')) {
        setColumns(ONBOARDING_KANBAN_STRUCTURE);
        setPoolTasks(ALL_ONBOARDING_TASKS);
        setIsComplete(false);
    }
  };

  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-7xl mx-auto w-full px-4 pt-4 md:pt-0 relative">
      
      {isComplete && (
         <>
            <div className="confetti bg-purple-500 left-[10%]" style={{ animationDelay: '0s' }}></div>
            <div className="confetti bg-pink-500 left-[50%]" style={{ animationDelay: '0.5s' }}></div>
         </>
      )}

      <div className="shrink-0 mb-4 flex flex-col lg:flex-row justify-between items-end gap-2">
        <SectionHeading 
          title="ACCIONES CLAVE 📋" 
          subtitle="Tu misión: Organizá el plan de aterrizaje. Arrastrá las tarjetas del banco a su momento ideal."
        />
        <button 
            onClick={resetBoard}
            className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-purple-200 text-purple-700 hover:bg-white hover:shadow-md rounded-xl transition-all text-xs font-bold backdrop-blur-sm"
            title="Reiniciar Tablero"
        >
            <RotateCcw className="w-3.5 h-3.5" />
            Reiniciar
        </button>
      </div>

      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-6 pb-2 overflow-hidden">
        
        {/* TASK POOL */}
        <div className="lg:w-1/4 flex flex-col bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white shadow-xl shadow-purple-900/5 overflow-hidden shrink-0 h-1/3 lg:h-auto">
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100/50">
                <h3 className="font-brand font-bold text-slate-900 flex items-center gap-2 mb-3 text-sm">
                    <ListPlus className="w-4 h-4 text-purple-600" />
                    Banco de Tareas
                </h3>
                
                {/* Add Task Input Group */}
                <div className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        value={newTaskContent}
                        onChange={(e) => setNewTaskContent(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTask()}
                        placeholder="Nueva tarea..."
                        className="w-full px-3 py-2 rounded-lg border border-white/60 text-xs focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/60"
                    />
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <select 
                                value={newTaskTag}
                                onChange={(e) => setNewTaskTag(e.target.value as any)}
                                className="w-full appearance-none px-3 py-2 rounded-lg border border-white/60 text-xs font-bold text-slate-600 bg-white/60 focus:outline-none cursor-pointer"
                            >
                                <option value="Líder">Líder</option>
                                <option value="TBP">TBP</option>
                                <option value="Equipo">Equipo</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                        </div>
                        <button onClick={addTask} className="px-3 bg-slate-900 text-white rounded-lg hover:bg-purple-600 transition-colors shadow-sm">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 p-3 overflow-y-auto space-y-2 custom-scrollbar bg-white/40">
                {poolTasks.map(task => (
                    <div 
                        key={task.id} 
                        draggable 
                        onDragStart={(e) => handleDragStart(e, task.id, 'pool')}
                        className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm cursor-grab active:cursor-grabbing group hover:border-purple-300 hover:shadow-md transition-all flex justify-between items-start"
                    >
                        <div className="flex items-start gap-2">
                            <GripVertical className="w-3 h-3 text-slate-300 mt-0.5 shrink-0" />
                            <div>
                                <span className={`text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded mr-1.5 align-middle
                                    ${task.tag === 'Líder' ? 'bg-purple-100 text-purple-700' : 
                                      task.tag === 'TBP' ? 'bg-blue-100 text-blue-700' : 
                                      'bg-green-100 text-green-700'}`}>
                                    {task.tag}
                                </span>
                                <span className="text-xs font-medium text-slate-700">{task.content}</span>
                            </div>
                        </div>
                    </div>
                ))}
                {poolTasks.length === 0 && (
                    <div className="text-center py-8 text-slate-400 text-xs italic">
                        ¡Excelente! Tablero lleno.
                    </div>
                )}
            </div>
        </div>

        {/* KANBAN BOARD */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 h-full overflow-y-auto lg:overflow-visible">
            {columns.map((column, colIndex) => {
                const gradient = colIndex === 0 ? 'from-orange-50 to-orange-100/30' 
                               : colIndex === 1 ? 'from-purple-50 to-purple-100/30' 
                               : 'from-green-50 to-green-100/30';
                
                return (
                <div 
                    key={column.id} 
                    className={`
                        rounded-[2rem] p-3 flex flex-col h-full border transition-all duration-300 bg-white/50 backdrop-blur-md min-h-[200px]
                        ${dragOverCol === column.id ? 'ring-2 ring-purple-400 scale-[1.02] bg-white border-purple-200' : 'border-slate-100 shadow-lg shadow-slate-200/50'}
                    `}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => handleDragEnter(e, column.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, column.id)}
                >
                    <div className={`flex items-center gap-2 mb-3 px-3 py-2 rounded-xl bg-gradient-to-r ${gradient}`}>
                        <span className="text-xl">{column.emoji}</span>
                        <h3 className="font-brand font-bold text-slate-900 text-xs lg:text-sm">
                        {column.title}
                        </h3>
                        <span className="ml-auto bg-white px-1.5 py-0.5 rounded-full text-[9px] font-bold text-slate-400 border border-slate-50">{column.tasks.length}</span>
                    </div>

                    <div className="flex-1 space-y-2 overflow-y-auto pr-1 custom-scrollbar">
                        {column.tasks.map((task) => (
                            <div 
                                key={task.id} 
                                draggable
                                onDragStart={(e) => handleDragStart(e, task.id, column.id)}
                                className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-purple-300 hover:shadow-md cursor-grab active:cursor-grabbing group relative transition-all"
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <span className={`text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded
                                    ${task.tag === 'Líder' ? 'bg-purple-50 text-purple-700' : 
                                        task.tag === 'TBP' ? 'bg-blue-50 text-blue-700' : 
                                        'bg-green-50 text-green-700'}`}>
                                    {task.tag}
                                    </span>
                                    <button onClick={() => deleteTask(task.id, column.id)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                </div>
                                <p className="text-slate-700 text-xs font-bold leading-tight">
                                    {task.content}
                                </p>
                            </div>
                        ))}
                        {column.tasks.length === 0 && (
                            <div className="h-full min-h-[100px] border-2 border-dashed border-slate-200/50 rounded-xl flex flex-col items-center justify-center text-slate-300 text-[10px] font-medium p-4 text-center">
                                <ListPlus className="w-6 h-6 mb-2 opacity-50" />
                                Arrastrá tareas aquí
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