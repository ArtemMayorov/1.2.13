import React, { useEffect, useState } from 'react';

import '../../index.css';
import TaskList from '../../components/TaskList/TaskList.jsx';
import Footer from '../../components/footer/footer.jsx';
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm.jsx';

const App = () => {
  let maxId = Math.floor(Math.random() * 1000);
  const createItem = (text) => {
    return {
      createdTime: new Date(),
      done: false,
      id: maxId++,
      taskText: text,
      state: 'view',
    };
  };
  const [tasks, changeTask] = useState([
    createItem('task 1'),
    createItem('task 2'),
    createItem('task 3'),
    createItem('task 4'),
  ]);

  let [stateFilter, setStateFilter] = useState('All');
  let [currentTaskList, setTaskList] = useState(tasks);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const filterToggle = (e) => {
    const filterChildren = [...e.currentTarget.children];
    filterChildren.map((el) => {
      return (el.firstElementChild.className = '');
    });

    e.target.classList.toggle('selected');
  };

  const setFilter = (e) => {
    const evenContent = e.target.textContent;
    if (evenContent === 'All') {
      setTaskList(tasks);
      setStateFilter('All');
    } else if (evenContent === 'Active') {
      let newTasks = [...tasks].filter((el) => el.done === false);
      setTaskList(newTasks);
      setStateFilter('Active');
    } else if (evenContent === 'Completed') {
      let newTasks = [...tasks].filter((el) => el.done === true);
      setTaskList(newTasks);
      setStateFilter('Completed');
    }
  };

  const deleteItem = (id) => {
    changeTask((tasks) => {
      const idx = tasks.findIndex((el) => el.id === id);
      const newTasks = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];
      return newTasks;
    });
  };

  const addItem = (text) => {
    changeTask((tasks) => {
      const newTask = [createItem(text)];
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

  const editTask = (taskText, id) => {
    changeTask((tasks) => {
      const idx = tasks.findIndex((el) => el.id === id);
      const oldItem = tasks[idx];
      const newTask = { ...oldItem, taskText: taskText, state: 'editing' };
      const newTasks = [...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)];
      return newTask.done ? tasks : newTasks;
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
      <NewTaskForm onAdd={addItem} setStateFilter={setStateFilter} />
      <TaskList
        onAdd={addItem}
        editTask={editTask}
        taskNewText={taskNewText}
        stateFilter={stateFilter}
        tasksBody={currentTaskList}
        onDeleted={deleteItem}
        onMarkComplited={onMarkComplited}
      />
      <Footer
        clearCompleted={clearCompleted}
        taskCounter={taskCounter}
        setFilter={setFilter}
        filterToggle={filterToggle}
      />
    </section>
  );
};
export default App;
