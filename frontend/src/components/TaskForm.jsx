import React, { useState, useCallback } from "react";
import { useTasks } from "../context/TaskContext.jsx";
import { v4 as uuidv4 } from "uuid";

const TaskForm = React.memo(() => {
  const [taskText, setTaskText] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!taskText.trim()) return;

      addTask({
        id: uuidv4(),
        text: taskText.trim(),
        completed: false,
      });

      setTaskText("");
    },
    [taskText, addTask]
  );

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="task-btn">
        Add
      </button>
    </form>
  );
});

export default TaskForm;
