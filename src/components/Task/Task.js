import React from "react";

const Task = () => {
    // const [completed, editing, view ] = ['completed', 'editing', 'view'];
    const props = ['completed', 'editing', 'view']

    return (
        <li className={props[0]}>
            <input className="toggle" type="checkbox"></input>
            <div className="view">
            <label>
                <span className="description">Completed task</span>
                <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
            </div>
        </li>
    );
};
export default Task