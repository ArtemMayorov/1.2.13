import React from "react";

function editTask(){
    console.log('editTask');
};
function destroyTask() {
    console.log('destroyTask');
};


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
        <button className="icon icon-edit" onClick={editTask}></button>
        <button className="icon icon-destroy" onClick={destroyTask}></button>
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
            <button className="icon icon-edit" onClick={editTask}></button>
            <button className="icon icon-destroy" onClick={destroyTask}></button>
            </div>
        </li>
    );
};

export default Task