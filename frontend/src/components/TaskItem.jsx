import React, { useCallback } from "react";
import { useTasks } from "../context/TaskContext.jsx";
import { FaCheckCircle, FaRegCircle, FaTrash } from "react-icons/fa";

const TaskItem = React.memo(({ task }) => {
  const { deleteTask, toggleTask } = useTasks();

  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [task.id, toggleTask]);

  const handleDelete = useCallback(() => {
    deleteTask(task.id);
  }, [task.id, deleteTask]);

  return (
    <div className={`task-item ${task.completed ? "completed" : "pending"}`}>
      <div
        className="task-left"
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      >
        {task.completed ? (
          <FaCheckCircle color="green" style={{ marginRight: "8px" }} />
        ) : (
          <FaRegCircle color="gray" style={{ marginRight: "8px" }} />
        )}
        <span>{task.text}</span>
      </div>
      <div className="task-right">
        <span
          className={`task-status ${task.completed ? "completed" : "pending"}`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
        <button
          onClick={handleDelete}
          className="delete-btn"
          title="Delete task"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
});

export default TaskItem;
