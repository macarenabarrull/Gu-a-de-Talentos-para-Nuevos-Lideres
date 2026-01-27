import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_KANBAN } from '../constants';
import { KanbanColumn } from '../types';

export const OnboardingKanban: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumn[]>(ONBOARDING_KANBAN);
  const [isComplete, setIsComplete] = useState(false);

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('fyo_kanban_state');
    if (saved) {
      setColumns(JSON.parse(saved));
    }
  }, []);

  // Save to LocalStorage & Check completion
  useEffect(() => {
    localStorage.setItem('fyo_kanban_state', JSON.stringify(columns));
    
    // Check if all tasks are in the last column or distributed in a way that implies progress
    // For this demo, let's trigger "complete" if the first column is empty (everything moved forward)
    const firstColEmpty = columns[0].tasks.length === 0;
    if (firstColEmpty) {
        setIsComplete(true);
    }
  }, [columns]);

  const handleDragStart = (e: React.DragEvent, taskId: string, sourceColId: string) => {
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('sourceColId', sourceColId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, destColId: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColId = e.dataTransfer.getData('sourceColId');

    if (sourceColId === destColId) return;

    moveTask(taskId, sourceColId, destColId);
  };

  const handleTaskClick = (taskId: string, sourceColId: string) => {
    const colIndex = columns.findIndex(c => c.id === sourceColId);
    if (colIndex < columns.length - 1) {
        moveTask(taskId, sourceColId, columns[colIndex + 1].id);
    } else {
        // Cycle back to start
        moveTask(taskId, sourceColId, columns[0].id);
    }
  };

  const moveTask = (taskId: string, sourceColId: string, destColId: string) => {
    const newColumns = columns.map(col => {
        if (col.id === sourceColId) {
            return { ...col, tasks: col.tasks.filter(t => t.id !== taskId) };
        }
        if (col.id === destColId) {
             const sourceColumn = columns.find(c => c.id === sourceColId);
             const task = sourceColumn?.tasks.find(t => t.id === taskId);
             if (task) {
                 return { ...col, tasks: [...col.tasks, task] };
             }
        }
        return col;
    });
    setColumns(newColumns);
  };

  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full relative">
      
      {isComplete && (
         <>
            <div className="confetti bg-purple-500 left-[10%]" style={{ animationDelay: '0s' }}></div>
            <div className="confetti bg-pink-500 left-[50%]" style={{ animationDelay: '0.5s' }}></div>
            <div className="confetti bg-green-500 left-[80%]" style={{ animationDelay: '0.2s' }}></div>
         </>
      )}

      <div className="mb-6 lg:mb-10">
        <SectionHeading 
          title="Tablero de Ingreso 📋" 
          subtitle="Los primeros 90 días son críticos. ¡Probá arrastrar las tareas o hacé clic para moverlas!"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 h-[55vh] max-h-[500px]">
        {columns.map((column, colIndex) => (
          <div 
            key={column.id} 
            className="animate-enter bg-slate-50/80 rounded-3xl p-4 lg:p-5 flex flex-col h-full border border-slate-200/60 backdrop-blur-sm transition-colors hover:bg-slate-100"
            style={{ animationDelay: `${colIndex * 150}ms` }}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
             
             {/* Column Header */}
             <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="font-bold text-slate-700 flex items-center gap-2 text-sm lg:text-lg">
                   <span className="text-xl lg:text-2xl">{column.emoji}</span> {column.title}
                </h3>
                <span className="bg-slate-200 text-slate-500 text-[10px] lg:text-xs font-bold px-2 py-0.5 rounded-full transition-all duration-300">
                   {column.tasks.length}
                </span>
             </div>

             {/* Tasks Area */}
             <div className="flex-1 space-y-3 lg:space-y-4 overflow-y-auto pr-2 custom-scrollbar p-1 min-h-[50px]">
                {column.tasks.map((task, taskIndex) => {
                    const rotateClass = (colIndex + taskIndex) % 2 === 0 ? 'rotate-1' : '-rotate-1';
                    
                    return (
                      <div 
                        key={task.id} 
                        draggable
                        onDragStart={(e) => handleDragStart(e, task.id, column.id)}
                        onClick={() => handleTaskClick(task.id, column.id)}
                        className={`
                            bg-white p-4 rounded-2xl shadow-sm border border-slate-100 
                            hover:shadow-[0_8px_20px_-5px_rgba(0,0,0,0.1)] hover:scale-[1.02] hover:z-10 hover:rotate-0 hover:border-purple-200
                            cursor-grab active:cursor-grabbing active:scale-95 transition-all duration-200 group
                            ${rotateClass} transform origin-center select-none
                        `}
                      >
                         <div className="flex justify-between items-start mb-2">
                            <span className={`text-[9px] lg:text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border 
                               ${task.tag === 'Líder' ? 'bg-purple-50 text-purple-700 border-purple-100' : 
                                 task.tag === 'RRHH' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                                 'bg-green-50 text-green-700 border-green-100'}`}>
                               {task.tag}
                            </span>
                         </div>
                         <p className="text-slate-700 text-xs lg:text-sm font-medium leading-snug">
                            {task.content}
                         </p>
                      </div>
                    );
                })}
                
                {column.tasks.length === 0 && (
                    <div className="h-24 lg:h-32 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-300 text-xs lg:text-sm font-medium">
                        Soltá aquí
                    </div>
                )}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};