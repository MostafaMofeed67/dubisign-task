"use client";

import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import Heading from "../ui/heading";
import TaskItem from "./task-item";

interface Task {
  id: number;
  title: string;
  order: number;
}

const TasksList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Todo 1", order: 1 },
    { id: 2, title: "Todo 2", order: 2 },
    { id: 3, title: "Todo 3", order: 3 },
  ]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const currentTasks = Array.from(tasks);
    const [reorderedItem] = currentTasks.splice(result.source.index, 1);
    currentTasks.splice(result.destination.index, 0, reorderedItem);

    const updatedTasks = currentTasks.map((item, index) => ({
      ...item,
      order: index + 1,
    }));

    console.log(updatedTasks);

    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white p-5 w-full max-w-3xl mx-auto rounded-md shadow-md">
      <Heading text="Drag & Drop Task" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskItem title={task.title} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TasksList;
