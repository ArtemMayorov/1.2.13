import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter';

const Footer = ({ taskCounter, setFilter, filterToggle, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{taskCounter} items left</span>
      <ul className="filters">
        <TasksFilter setFilter={setFilter} filterToggle={filterToggle} />
      </ul>
      <button onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  taskCounter: PropTypes.number,
  setFilter: PropTypes.func,
  filterToggle: PropTypes.func,
  clearCompleted: PropTypes.func,
};
Footer.defaultProps = {
  taskCounter: 0,
  setFilter: null,
  filterToggle: null,
  clearCompleted: null,
};
export default Footer;
