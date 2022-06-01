import React from "react";



const TasksFilter = ({setFilter, filterToggle}) => {
    return (
      <ul 
      onClick={filterToggle}
      className="filters">
        <li>
            <button 
            className="selected"
            onClick={setFilter}
            >All</button>
        </li>
        <li>
            <button 
            onClick={setFilter}
            >Active</button>
        </li>
        <li>
            <button 
            onClick={setFilter}
            >Completed</button>
        </li>
      </ul>
    );
};
export default TasksFilter;