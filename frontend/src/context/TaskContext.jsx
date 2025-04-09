import React, { createContext, useContext, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = useCallback(
    (task) => {
      setTasks((prev) => [...prev, task]);
    },
    [setTasks]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    },
    [setTasks]
  );

  const toggleTask = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [setTasks]
  );

  const reorderTasks = useCallback(
    (newOrder) => {
      setTasks(newOrder);
    },
    [setTasks]
  );

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTask, reorderTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
