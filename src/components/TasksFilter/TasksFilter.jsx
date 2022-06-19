import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ setFilter, filterToggle }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const setFilt = (filter) => {
    setSelectedFilter(filter);
    setFilter(filter);
  };
  return (
    <ul onClick={filterToggle} className="filters">
      <li>
        <button className={selectedFilter === 'All' ? 'selected' : ''} onClick={() => setFilt('All')}>
          All
        </button>
      </li>
      <li>
        <button className={selectedFilter === 'Active' ? 'selected' : ''} onClick={() => setFilt('Active')}>
          Active
        </button>
      </li>
      <li>
        <button className={selectedFilter === 'Completed' ? 'selected' : ''} onClick={() => setFilt('Completed')}>
          Completed
        </button>
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
