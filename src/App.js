import React, { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import NavBar from './Components/NavBar';
import TaskModal from './Components/TaskModal';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'New', priority: 'High', creationTime: '2023-01-01', completionTime: null, statusId: 1 },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'In Progress', priority: 'Medium', creationTime: '2023-01-02', completionTime: null, statusId: 2 },
    { id: 3, title: 'Task 3', description: 'Description 3', status: 'Completed', priority: 'Low', creationTime: '2023-01-03', completionTime: '2023-01-04', statusId: 3 },
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <NavBar onNewTaskClick={() => setIsModalOpen(true)} />
      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} addTask={addTask} />
      <Body tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
