import React, { useState, useMemo, useCallback } from "react";
import { useTasks } from "../context/TaskContext.jsx";
import TaskItem from "./TaskItem.jsx";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = () => {
  const { tasks, reorderTasks } = useTasks();
  const [filter, setFilter] = useState("all");

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter((task) => task.completed);
    if (filter === "pending") return tasks.filter((task) => !task.completed);
    return tasks;
  }, [tasks, filter]);

  const handleDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;

      const newTasks = Array.from(filteredTasks);
      const [moved] = newTasks.splice(result.source.index, 1);
      newTasks.splice(result.destination.index, 0, moved);

      reorderTasks(newTasks);
    },
    [filteredTasks, reorderTasks]
  );

  return (
    <div className="task-list">
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable
          droppableId="tasks"
          isDropDisabled={false}
          isCombineEnabled={false}
          ignoreContainerClipping={false}
        >
          {(provided) => (
            <ul
              className="task-items"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTasks.map((task, index) => (
                <Draggable
                  key={String(task.id)}
                  draggableId={String(task.id)}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskItem task={task} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
