import React from "react";
import TasksFilter from "../TasksFilter/TasksFilter";
const Footer = ({taskCounter, setFilter, filterToggle, stateFilter, setStateFilter }) => {
   
    return (
        <footer className="footer">
         <span className="todo-count">{taskCounter} items left</span>
         <ul className="filters">
             <TasksFilter
             setFilter = {setFilter}
             filterToggle ={filterToggle}
             />
         </ul>
         <button className="clear-completed">Clear completed</button>
        </footer>
    );
};

export default Footer