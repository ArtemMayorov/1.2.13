import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/NewTaskForm/NewTaskForm.js';

import './index.css';
import TaskList from './components/TaskList/TaskList.js';
import Footer from './components/footer/footer.js';

const App = () => {
    const tasks = 
    [
        {
        id:1,
        taskText: 'Completed task',
        state: 'completed',
        },
        {
        id:2,
        taskText: 'Editing task',
        state: 'editing',
        },
        {
        id:3,
        taskText: 'Completed task',
        state: 'completed',
        },
        {
        id:4,
        taskText: 'Active task',
        state: 'view',
        },
        {
        id:5,
        taskText: 'Active task',
        state: 'view',
        },
    ]    
    return (
        <section className='todoapp'>
        <AppHeader/>
        <TaskList tasksBody={tasks}/>
        <Footer/>
        </section>
    );
};
ReactDom.render(<App />, 
document.getElementById('root'))