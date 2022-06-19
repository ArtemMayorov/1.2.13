import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import '../../index.css';
import TaskList from '../../components/TaskList/TaskList.jsx';
import Footer from '../../components/footer/footer.jsx';
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm.jsx';

const App = () => {
  const createItem = (text, minutes = 120) => {
    return {
      createdTime: new Date(),
      done: false,
      id: parseInt(uuid(), 16),
      taskText: text,
      state: 'view',
      minutes: minutes,
    };
  };
  const [tasks, changeTask] = useState([
    createItem('task 1'),
    createItem('task 2'),
    createItem('task 3'),
    createItem('task 4'),
  ]);
  let [activeFilter, setActiveFilter] = useState('All');

  const updateTimer = (id, second) => {
    changeTask((tasks) => {
      const idx = tasks.findIndex((el) => el.id === id);
      const oldItem = tasks[idx];
      const newTask = { ...oldItem, minutes: second };
      const newTasks = [...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)];
      return newTasks;
    });
  };
  const setFilter = (filter) => {
    setActiveFilter(filter);
  };

  const deleteItem = (id) => {
    changeTask((tasks) => {
      const idx = tasks.findIndex((el) => el.id === id);
      const newTasks = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];
      return newTasks;
    });
  };

  const addItem = (text, minutes) => {
    changeTask((tasks) => {
      if (text.trim() === '') return tasks;
      const newTask = [createItem(text, minutes)];
      const newTask2 = [...newTask, ...tasks];
      return newTask2;
    });
  };

  const onMarkComplited = (id) => {
    changeTask((tasks) => {
      const idx = tasks.findIndex((el) => el.id === id);
      const oldItem = tasks[idx];
      const newTask = { ...oldItem, done: !oldItem.done };
      const newTasks = [...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)];
      return newTasks;
    });
  };

  const clearCompleted = () => {
    changeTask((tasks) => {
      const newTasks = tasks.filter((el) => el.done !== true);
      return newTasks;
    });
  };

  const taskNewText = (newText, id) => {
    changeTask((tasks) => {
      const idx = tasks.findIndex((el) => el.id === id);
      const oldItem = tasks[idx];
      const newTask = { ...oldItem, taskText: newText, state: 'view' };
      const newTasks = [...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)];
      return newTasks;
    });
  };

  const taskCounter = tasks.filter((el) => el.state !== 'completed' && el.done !== true).length;
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <NewTaskForm onAdd={addItem} setStateFilter={setActiveFilter} />
      <TaskList
        updateTimer={updateTimer}
        onAdd={addItem}
        taskNewText={taskNewText}
        stateFilter={activeFilter}
        tasks={tasks}
        onDeleted={deleteItem}
        onMarkComplited={onMarkComplited}
      />
      <Footer clearCompleted={clearCompleted} taskCounter={taskCounter} setFilter={setFilter} />
    </section>
  );
};
export default App;
