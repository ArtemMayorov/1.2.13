import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/NewTaskForm/NewTaskForm.js';

import './index.css';
import TaskList from './components/TaskList/TaskList.js';

const App = () => {
    const tasks = 
    [
        {
        taskText: 'Completed task',
        state: 'completed',
        },
        {
        taskText: 'Editing task',
        state: 'editing',
        },
        {
        taskText: 'Completed task',
        state: 'completed',
        },
        {
        taskText: 'Active task',
        state: 'view',
        },
        {
        taskText: 'Active task',
        state: 'view',
        },
    ]    
    return (
        <section className='todoapp'>
        <AppHeader/>
        <TaskList tasksBody={tasks}/>
        </section>
    );
};
ReactDom.render(<App />, 
document.getElementById('root'))