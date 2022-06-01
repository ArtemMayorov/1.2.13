import React from "react";



// const filterToggle = (e) => {
//     e.target.classList.toggle('selected');
//   };

// const filterToggle = (e) => {
//   const filterChildren = [...e.currentTarget.children];
//   const buttonList = filterChildren.map(el => {
//      return  el.firstElementChild.className = ''
//     });
//     e.target.classList.toggle('selected');
//   };

const TasksFilter = ({setFilter, filterToggle}) => {
    return (
      <ul 
      onClick={filterToggle}
      // onClick={filterToggle}
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