import React from "react";

const Task = ({task}) => {
    if(task.state === 'editing'){
        return (
        <li key={task.state } className={task.state }>
        <input className="toggle" type="checkbox"></input>
        <div className="view">
        <label>
            <span className="description">{task.taskText}</span>
            <span className="created">created {new Date().toLocaleTimeString()}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
        </div>
        <input type="text" className="edit" value="Editing task"></input>
    </li>
    );
    };

    return (
        <li key={task.state } className={task.state }>
            <input className="toggle" type="checkbox"></input>
            <div className="view">
            <label>
                <span className="description">{task.taskText}</span>
                <span className="created">created {new Date().toLocaleTimeString()}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
            </div>
        </li>
    );
};

export default Task