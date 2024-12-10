import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task, deleteTask }) => {
  
  const isCompleted = task.completionTime !== null;

  return (
    <div className={`task-card-${task.statusId}`}>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <div>
        <p>{task.creationTime}</p>
        <p>{task.completionTime || 'Not completed'}</p>
      </div>
      <p>{task.priority}</p>
      <div className='btn-cont'>
        {isCompleted && (
          <p>Task completed.</p>
        )}
        {!isCompleted && (
          <>
            <button className='btn' onClick={() => deleteTask(task.id)}>Delete</button>
            <button className='btn'>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
