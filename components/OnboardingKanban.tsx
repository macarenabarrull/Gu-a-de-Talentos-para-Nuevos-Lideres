import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_KANBAN } from '../constants';
import { KanbanColumn, OnboardingTask } from '../types';

export const OnboardingKanban: React.FC = () => {
  // Local state to handle drag and drop / movement
  const [columns, setColumns] = useState<KanbanColumn[]>(ONBOARDING_KANBAN);

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

  // Also support click to move for easier mobile interaction
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
    <section className="h-full flex flex-col justify-center">
      <div className="mb-6">
        <SectionHeading 
          title="Tablero de Ingreso 📋" 
          subtitle="Los primeros 90 días son críticos. ¡Probá arrastrar las tareas o hacé clic para moverlas!"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[50vh] max-h-[400px]">
        {columns.map((column, colIndex) => (
          <div 
            key={column.id} 
            className="animate-enter bg-slate-50/80 rounded-2xl p-3 flex flex-col h-full border border-slate-200/60 backdrop-blur-sm transition-colors hover:bg-slate-100"
            style={{ animationDelay: `${colIndex * 150}ms` }}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
             
             {/* Column Header */}
             <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="font-bold text-slate-700 flex items-center gap-2 text-sm">
                   <span className="text-lg">{column.emoji}</span> {column.title}
                </h3>
                <span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full transition-all duration-300">
                   {column.tasks.length}
                </span>
             </div>

             {/* Tasks Area */}
             <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar p-1 min-h-[50px]">
                {column.tasks.map((task, taskIndex) => {
                    const rotateClass = (colIndex + taskIndex) % 2 === 0 ? 'rotate-1' : '-rotate-1';
                    
                    return (
                      <div 
                        key={task.id} 
                        draggable
                        onDragStart={(e) => handleDragStart(e, task.id, column.id)}
                        onClick={() => handleTaskClick(task.id, column.id)}
                        className={`
                            bg-white p-3 rounded-xl shadow-sm border border-slate-100 
                            hover:shadow-[0_8px_20px_-5px_rgba(0,0,0,0.1)] hover:scale-[1.05] hover:z-10 hover:rotate-0 hover:border-purple-200
                            cursor-grab active:cursor-grabbing transition-all duration-200 group
                            ${rotateClass} transform origin-center select-none
                        `}
                      >
                         <div className="flex justify-between items-start mb-1.5">
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border 
                               ${task.tag === 'Líder' ? 'bg-purple-50 text-purple-700 border-purple-100' : 
                                 task.tag === 'RRHH' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                                 'bg-green-50 text-green-700 border-green-100'}`}>
                               {task.tag}
                            </span>
                         </div>
                         <p className="text-slate-700 text-xs font-medium leading-snug">
                            {task.content}
                         </p>
                      </div>
                    );
                })}
                
                {column.tasks.length === 0 && (
                    <div className="h-20 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-300 text-xs">
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