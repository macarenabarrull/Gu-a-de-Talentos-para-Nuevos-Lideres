import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { ONBOARDING_KANBAN } from '../constants';
import { KanbanColumn } from '../types';

export const OnboardingKanban: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumn[]>(ONBOARDING_KANBAN);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('fyo_kanban_state');
    if (saved) {
      setColumns(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fyo_kanban_state', JSON.stringify(columns));
    const firstColEmpty = columns[0].tasks.length === 0;
    if (firstColEmpty) setIsComplete(true);
  }, [columns]);

  const handleDragStart = (e: React.DragEvent, taskId: string, sourceColId: string) => {
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('sourceColId', sourceColId);
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
        moveTask(taskId, sourceColId, columns[0].id);
    }
  };

  const moveTask = (taskId: string, sourceColId: string, destColId: string) => {
    const newColumns = columns.map(col => {
        if (col.id === sourceColId) return { ...col, tasks: col.tasks.filter(t => t.id !== taskId) };
        if (col.id === destColId) {
             const sourceColumn = columns.find(c => c.id === sourceColId);
             const task = sourceColumn?.tasks.find(t => t.id === taskId);
             if (task) return { ...col, tasks: [...col.tasks, task] };
        }
        return col;
    });
    setColumns(newColumns);
  };

  return (
    <section className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-4 relative">
      
      {isComplete && (
         <>
            <div className="confetti bg-purple-500 left-[10%]" style={{ animationDelay: '0s' }}></div>
            <div className="confetti bg-pink-500 left-[50%]" style={{ animationDelay: '0.5s' }}></div>
            <div className="confetti bg-green-500 left-[80%]" style={{ animationDelay: '0.2s' }}></div>
         </>
      )}

      <div className="mb-8 lg:mb-12">
        <SectionHeading 
          title="ACCIONES CLAVE 📋" 
          subtitle="No dejes nada al azar. Los primeros 90 días definen la permanencia."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 h-auto lg:h-[60vh] max-h-[600px]">
        {columns.map((column, colIndex) => (
          <div 
            key={column.id} 
            className="animate-enter bg-slate-100 rounded-[2rem] p-4 lg:p-6 flex flex-col h-full border-2 border-slate-200 transition-colors hover:border-purple-200 hover:bg-white"
            style={{ animationDelay: `${colIndex * 150}ms` }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, column.id)}
          >
             
             {/* Column Header */}
             <div className="flex items-center gap-3 mb-6 px-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                    {column.emoji}
                </div>
                <h3 className="font-brand font-bold text-slate-800 text-lg lg:text-xl">
                   {column.title}
                </h3>
             </div>

             {/* Tasks Area */}
             <div className="flex-1 space-y-3 lg:space-y-4 overflow-y-auto pr-2 custom-scrollbar p-1">
                {column.tasks.map((task) => (
                      <div 
                        key={task.id} 
                        draggable
                        onDragStart={(e) => handleDragStart(e, task.id, column.id)}
                        onClick={() => handleTaskClick(task.id, column.id)}
                        className="
                            bg-white p-5 rounded-2xl shadow-sm border border-slate-100 
                            hover:shadow-md hover:scale-[1.02] hover:border-purple-400
                            cursor-pointer transition-all duration-200 group
                            select-none relative overflow-hidden
                        "
                      >
                         <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-purple-500 transition-colors"></div>
                         
                         <div className="pl-3">
                             <div className="mb-2">
                                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md 
                                ${task.tag === 'Líder' ? 'bg-purple-100 text-purple-700' : 
                                    task.tag === 'RRHH' ? 'bg-blue-100 text-blue-700' : 
                                    'bg-green-100 text-green-700'}`}>
                                {task.tag}
                                </span>
                             </div>
                             <p className="text-slate-700 text-sm font-bold leading-snug">
                                {task.content}
                             </p>
                         </div>
                      </div>
                    )
                )}
                
                {column.tasks.length === 0 && (
                    <div className="h-full border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-sm font-medium opacity-50">
                        Completado
                    </div>
                )}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};