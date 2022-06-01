import React, { useState } from "react";



const Task = ({task, onDeleted, onMarkComplited}) => {

    return (
        <li key={task.id} className={task.done ? 'completed' : task.state}>
            <div className="view">
            <input 
            onClick={() => onMarkComplited(task.id)}
            className="toggle" 
            type="checkbox"></input>
            <label>
                <span className="description">{task.taskText}</span>
                <span className="created">created {new Date().toLocaleTimeString()}</span>
            </label>
            <button className="icon icon-edit"  
            ></button>
            <button className="icon icon-destroy"
            onClick={onDeleted}
            ></button>
            </div>
            {task.state === 'editing'?
             <input type="text" 
             className="edit" 
             value={task.taskText}
             >
             </input> : '' }
        </li>
    );
};

export default Task