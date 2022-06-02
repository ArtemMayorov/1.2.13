import React from "react";
import PropTypes  from "prop-types";


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
TasksFilter.propTypes = {
  setFilter: PropTypes.func,
  filterToggle: PropTypes.func,
};
TasksFilter.defaultProps = {
  setFilter: null,
  filterToggle: null,
};
export default TasksFilter;