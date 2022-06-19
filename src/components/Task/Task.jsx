import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

const Task = ({ task, onDeleted, onMarkComplited }) => {
  let [taskText, setText] = useState(task.taskText);
  let [editStatus, setEditStatus] = useState(false);

  const editTaskText = () => {
    setEditStatus(true);
    setText(taskText);
  };
  const keyUpEdit = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      if (taskText.trim() === '') return;
      setEditStatus(false);
    }
  };
  let classNames = '';
  if (task.done) {
    classNames += ' completed';
  }
  if (editStatus) {
    classNames += ' editing';
  }
  return (
    <li className={classNames}>
      <div className="view">
        <input
          checked={task.done ? true : false}
          onChange={() => onMarkComplited(task.id)}
          className="toggle"
          type="checkbox"
        ></input>
        <label>
          <span className="description">{taskText}</span>
          <span className="created">
            Created {` ${formatDistanceToNow(task.createdTime, { includeSeconds: true })}`} ago{' '}
          </span>
        </label>
        <button onClick={editTaskText} className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      {editStatus ? (
        <input
          type="text"
          className="edit"
          onKeyUp={keyUpEdit}
          onChange={(e) => setText(e.target.value)}
          value={taskText}
        ></input>
      ) : null}
    </li>
  );
};
Task.propTypes = {
  task: PropTypes.shape({
    done: PropTypes.bool,
    id: PropTypes.number,
    taskText: PropTypes.string,
    state: PropTypes.string,
  }),
  onDeleted: PropTypes.func,
  onMarkComplited: PropTypes.func,
  editTask: PropTypes.func,
  taskNewText: PropTypes.func,
};
export default Task;
