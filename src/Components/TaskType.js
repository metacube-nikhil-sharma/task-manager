import React from 'react';
import TaskCard from './TaskCard';
import './TaskType.css';

const TaskType = ({ tasks, deleteTask }) => {
    return (
        <div className='task-type'>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                tasks.map(task => (
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
                ))
            )}
        </div>
    );
};

export default TaskType;
