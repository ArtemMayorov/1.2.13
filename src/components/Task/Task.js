import React from "react";

const Task = ({state}) => {

    if(state === 'editing'){
        return (
        <li key={state} className={state}>
        <input className="toggle" type="checkbox"></input>
        <div className="view">
        <label>
            <span className="description">Completed task</span>
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
        <li key={state} className={state}>
            <input className="toggle" type="checkbox"></input>
            <div className="view">
            <label>
                <span className="description">Completed task</span>
                <span className="created">created {new Date().toLocaleTimeString()}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
            </div>
        </li>
    );
};

export default Task