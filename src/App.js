import React from "react";
import TaskListContextProvider from "./contexts/TaskListContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FtaskList from "./components/FtaskList";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
            <FtaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
