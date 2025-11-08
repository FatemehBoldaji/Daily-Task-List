import React, { useState } from 'react';
import './App.css';
import { AddTask } from './components/AddTask';
import { TaskItems } from './components/TaskItems';
import { TaskProvider } from './components/TaskContext';
import { ToastContainer } from 'react-toastify';
import { TaskFilter } from './components/TaskFilter';
import { ThemeToggle } from './components/ThemeToggle';

function App() {

  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => {
    setIsDark(!isDark)
    document.body.classList.toggle("dark-mode")
  }

  return (
    <div className='App'>
      <TaskProvider>
        <div className='header'>
          <div className='checklist-title'>Daily Task List</div>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
        <TaskFilter />
        <TaskItems />
        <AddTask />
      </TaskProvider>
      <ToastContainer closeOnClick />
    </div>
  );
}

export default App;
