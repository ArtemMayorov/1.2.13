import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task.jsx';

const TaskList = ({ tasks, onDeleted, onMarkComplited, stateFilter, onAdd, taskNewText, updateTimer }) => {
  let tasksList = [...tasks];
  if (stateFilter === 'Active') {
    tasksList = [...tasks].filter((el) => el.done === false);
  }
  if (stateFilter === 'Completed') {
    tasksList = [...tasks].filter((el) => el.done === true);
  }
  return tasksList.map((elem) => {
    return (
      <ul key={elem.id} className="todo-list">
        <Task
          updateTimer={updateTimer}
          onAdd={onAdd}
          taskNewText={taskNewText}
          onMarkComplited={onMarkComplited}
          onDeleted={() => onDeleted(elem.id)}
          task={elem}
        />
      </ul>
    );
  });
};
TaskList.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    done: PropTypes.bool,
    isVisible: PropTypes.bool,
    created: PropTypes.shape(),
    id: PropTypes.number,
  }),
  onDeleted: PropTypes.func,
  onMarkComplited: PropTypes.func,
  editTask: PropTypes.func,
  taskNewText: PropTypes.func,
  onAdd: PropTypes.func,
};
TaskList.defaultProps = {
  tasksBody: {
    done: true,
    id: null,
    taskText: 'null',
    state: null,
  },
  onDeleted: null,
  onMarkComplited: null,
  editTask: null,
  taskNewText: null,
  onAdd: null,
};
export default TaskList;
