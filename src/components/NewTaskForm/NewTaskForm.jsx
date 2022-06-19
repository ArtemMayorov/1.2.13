import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';
const NewTaskForm = ({ onAdd }) => {
  const [label, setLabel] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const chageInput = (e, section) => {
    if (section === 'description') {
      setLabel(e.target.value);
    }
    if (section === 'min') {
      setMinutes(e.target.value);
    }
    if (section === 'sec') {
      setSeconds(e.target.value);
    }
  };

  const KeyUp = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      if (isNaN(minutes)) setMinutes('0');
      if (isNaN(seconds)) setSeconds('0');
      const totalMinutes = Number(minutes * 60) + Number(seconds);
      onAdd(label, totalMinutes);
      setLabel('');
      setMinutes('');
      setSeconds('');
    }
  };
  return (
    <form className="new-todo-form">
      <input
        id="description"
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyUp={KeyUp}
        onChange={(e) => chageInput(e, 'description')}
        autoFocus
        value={label}
      />
      <input
        type="number"
        min="0"
        max="720"
        onKeyUp={KeyUp}
        onChange={(e) => chageInput(e, 'min')}
        className="new-todo-form__timer"
        placeholder="Min"
        value={minutes}
        autoFocus=""
      />
      <input
        type="number"
        min="0"
        max="60"
        onKeyUp={KeyUp}
        onChange={(e) => chageInput(e, 'sec')}
        className="new-todo-form__timer"
        placeholder="Sec"
        value={seconds}
        autoFocus=""
      />
    </form>
  );
};
NewTaskForm.propTypes = {
  onAdd: PropTypes.func,
};
NewTaskForm.defaultProps = {
  onAdd: null,
};
export default NewTaskForm;
