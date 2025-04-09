import React from "react";
import { TaskProvider } from "./context/TaskContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Header from "./components/Header.jsx";
import "./styles/styles.css";

const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="container">
          <Header />
          <h1>Task Manager</h1>
          <TaskForm />
          <TaskList />
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
};

export default App;
