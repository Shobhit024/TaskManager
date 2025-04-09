import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import "./styles/styles.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="container">
        <Header />
        <h1>📝 Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </ThemeProvider>
  );
};

export default App;
