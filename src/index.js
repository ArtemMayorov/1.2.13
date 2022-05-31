import React from 'react';
// import ReactDom from 'react-dom';

import { createRoot } from 'react-dom/client';
// import App from  './components/app/App.jsx'

import AppHeader from './components/NewTaskForm/NewTaskForm.js';

import './index.css';
import TaskList from './components/TaskList/TaskList.js';
import Footer from './components/footer/footer.js';

const App = () => {
    const tasks = 
    [
        {
        id:new Date() + 2,
        taskText: 'Completed task',
        state: 'completed',
        },
        {
        id:new Date() + 3,
        taskText: 'Editing task',
        state: 'editing',
        },
        {
        id:new Date() + 4,
        taskText: 'Completed task',
        state: 'completed',
        },
        {
        id:new Date() + 5,
        taskText: 'Active task',
        state: 'view',
        },
        {
        id:new Date() + 6,
        taskText: 'Active task',
        state: 'view',
        },
        {
        id: new Date() + 7,
        taskText: 'Editing test',
        state: 'editing',
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
// ReactDom.render(<App />, 
// document.getElementById('root'))

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App></App>)