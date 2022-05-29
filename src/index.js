import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/NewTaskForm/NewTaskForm.js';

import './index.css';
import TaskList from './components/TaskList/TaskList.js';

const App = () => {
    return (
        <section className='todoapp'>
        <AppHeader/>
        <TaskList/>
        </section>
    );
};
ReactDom.render(<App />, 
document.getElementById('root'))