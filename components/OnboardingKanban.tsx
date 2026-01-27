import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_KANBAN } from '../constants';
import { KanbanColumn, OnboardingTask } from '../types';
import { Plus, Trash2, GripVertical, ListPlus, RotateCcw } from 'lucide-react';

export const OnboardingKanban: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumn[]>(ONBOARDING_KANBAN);
  const [poolTasks, setPoolTasks] = useState<OnboardingTask[]>([
      { id: "p1", content: "Presentación al equipo", tag: "Líder" },
      { id: "p2", content: "Configurar correo", tag: "Equipo" }
  ]);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [dragOverCol, setDragOverCol] = useState<string | null>(null);

  // Load state
  useEffect(() => {
    const savedCols = localStorage.getItem('fyo_kanban_cols_v3');
    const savedPool = localStorage.getItem('fyo_kanban_pool_v3');
    if (savedCols) setColumns(JSON.parse(savedCols));
    if (savedPool) setPoolTasks(JSON.parse(savedPool));
  }, []);

  // Save state
  useEffect(() => {
    localStorage.setItem('fyo_kanban_cols_v3', JSON.stringify(columns));
    localStorage.setItem('fyo_kanban_pool_v3', JSON.stringify(poolTasks));
    
    // Simple completion logic
    const finished = columns[0].tasks.length === 0 && columns[1].tasks.length === 0 && columns[2].tasks.length > 0;
    if (finished) setIsComplete(true);
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
        tag: "Líder" // Default tag
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
    if (confirm('¿Reiniciar el tablero? Se perderá el progreso actual.')) {
        setColumns(ONBOARDING_KANBAN);
        setPoolTasks([
            { id: "p1", content: "Presentación al equipo", tag: "Líder" },
            { id: "p2", content: "Configurar correo", tag: "Equipo" }
        ]);
        setIsComplete(false);
    }
  };

  return (
    <section className="h-full flex flex-col justify-start md:justify-center max-w-7xl mx-auto w-full px-4 pt-6 md:pt-0 relative">
      
      {isComplete && (
         <>
            <div className="confetti bg-purple-500 left-[10%]" style={{ animationDelay: '0s' }}></div>
            <div className="confetti bg-pink-500 left-[50%]" style={{ animationDelay: '0.5s' }}></div>
         </>
      )}

      <div className="shrink-0 mb-6 flex flex-col lg:flex-row justify-between items-end gap-4">
        <SectionHeading 
          title="ACCIONES CLAVE 📋" 
          subtitle="Organizá el plan de aterrizaje. Arrastrá las tareas del banco al tablero."
        />
        <button 
            onClick={resetBoard}
            className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-purple-200 text-purple-700 hover:bg-white hover:shadow-md rounded-xl transition-all text-xs font-bold backdrop-blur-sm"
            title="Reiniciar Tablero"
        >
            <RotateCcw className="w-4 h-4" />
            Reiniciar
        </button>
      </div>

      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-6 pb-6 overflow-hidden">
        
        {/* TASK POOL */}
        <div className="lg:w-1/4 flex flex-col bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white shadow-xl shadow-purple-900/5 overflow-hidden shrink-0">
            <div className="p-5 bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-b border-white/50">
                <h3 className="font-brand font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <ListPlus className="w-5 h-5 text-purple-600" />
                    Banco de Tareas
                </h3>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        value={newTaskContent}
                        onChange={(e) => setNewTaskContent(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTask()}
                        placeholder="Nueva tarea..."
                        className="flex-1 px-3 py-2 rounded-xl border border-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80"
                    />
                    <button onClick={addTask} className="p-2 bg-slate-900 text-white rounded-xl hover:bg-purple-600 transition-colors shadow-lg">
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            <div className="flex-1 p-3 overflow-y-auto space-y-3 custom-scrollbar bg-white/30">
                {poolTasks.map(task => (
                    <div 
                        key={task.id} 
                        draggable 
                        onDragStart={(e) => handleDragStart(e, task.id, 'pool')}
                        className="bg-white p-3 rounded-xl border border-white shadow-sm cursor-grab active:cursor-grabbing group hover:border-purple-300 hover:shadow-md transition-all flex justify-between items-start"
                    >
                        <div className="flex items-start gap-2">
                            <GripVertical className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />
                            <p className="text-xs font-bold text-slate-700">{task.content}</p>
                        </div>
                        <button onClick={() => deleteTask(task.id, 'pool')} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Trash2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                ))}
                {poolTasks.length === 0 && (
                    <div className="text-center py-8 text-slate-400 text-xs italic">
                        Banco vacío. Agregá tareas.
                    </div>
                )}
            </div>
        </div>

        {/* KANBAN BOARD */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 h-full overflow-y-auto lg:overflow-visible">
            {columns.map((column, colIndex) => {
                const gradient = colIndex === 0 ? 'from-orange-50 to-orange-100/50' 
                               : colIndex === 1 ? 'from-purple-50 to-purple-100/50' 
                               : 'from-green-50 to-green-100/50';
                
                const borderColor = colIndex === 0 ? 'border-orange-100' 
                                  : colIndex === 1 ? 'border-purple-100' 
                                  : 'border-green-100';

                return (
                <div 
                    key={column.id} 
                    className={`
                        rounded-[2rem] p-4 flex flex-col h-full border shadow-lg shadow-slate-200/50 min-h-[300px] transition-all duration-300 bg-white/60 backdrop-blur-md
                        ${dragOverCol === column.id ? 'ring-2 ring-purple-400 scale-[1.02] bg-white' : borderColor}
                    `}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => handleDragEnter(e, column.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, column.id)}
                >
                    <div className={`flex items-center gap-3 mb-4 px-3 py-2 rounded-xl bg-gradient-to-r ${gradient}`}>
                        <span className="text-2xl filter drop-shadow-sm">{column.emoji}</span>
                        <h3 className="font-brand font-bold text-slate-900 text-sm lg:text-base">
                        {column.title}
                        </h3>
                        <span className="ml-auto bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-500 shadow-sm border border-slate-100">{column.tasks.length}</span>
                    </div>

                    <div className="flex-1 space-y-3 overflow-y-auto pr-1 custom-scrollbar">
                        {column.tasks.map((task) => (
                            <div 
                                key={task.id} 
                                draggable
                                onDragStart={(e) => handleDragStart(e, task.id, column.id)}
                                className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-purple-300 hover:shadow-md cursor-grab active:cursor-grabbing group relative transition-all"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border border-transparent
                                    ${task.tag === 'Líder' ? 'bg-purple-50 text-purple-700 border-purple-100' : 
                                        task.tag === 'RRHH' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                                        'bg-green-50 text-green-700 border-green-100'}`}>
                                    {task.tag}
                                    </span>
                                    <button onClick={() => deleteTask(task.id, column.id)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                                <p className="text-slate-700 text-xs font-bold leading-snug">
                                    {task.content}
                                </p>
                            </div>
                        ))}
                        {column.tasks.length === 0 && (
                            <div className="h-24 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-xs font-medium opacity-50">
                                Arrastrá aquí
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