import React from "react";
import { useTasks } from "../context/TaskContext.jsx";
import TaskItem from "./TaskItem.jsx";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
