import React, { useState } from 'react'

import { createRoot } from 'react-dom/client';

import AppHeader from './components/NewTaskForm/NewTaskForm.js';

import './index.css';
import TaskList from './components/TaskList/TaskList.js';
import Footer from './components/footer/footer.js';
import NewTaskForm from './components/NewTaskForm/NewTaskForm.js';
const App = () => {
    let maxId = 100;
    let [tasks, changeTask ] = useState(
        [
            {
            id:maxId + 2,
            taskText: 'Completed task',
            state: 'completed',
            },
            {
            id:maxId + 3,
            taskText: 'Editing task',
            state: 'editing',
            },
            {
            id:maxId + 4,
            taskText: 'Completed task',
            state: 'completed',
            },
            {
            id:maxId+ 5,
            taskText: 'Active task',
            state: 'view',
            },
            {
            id:maxId+ 6,
            taskText: 'Active task',
            state: 'view',
            },
            {
            id: maxId + 7,
            taskText: 'Editing test',
            state: 'editing',
            },
        ]    
    );
   
    
const deleteItem = (id) => {
    changeTask(( tasks ) => {
        const idx = tasks.findIndex((el) => el.id === id);
        const newTasks = [
            ...tasks.slice(0, idx),
            ...tasks.slice(idx + 1)
        ];
        return newTasks
    } );
};

const addItem = (text) => {
    changeTask(( tasks ) => {
        const newTask = [{
            id: maxId + 7,
            taskText: text,
            state: 'view',
         }]
         const newTask2 = [
            ...newTask,
             ...tasks,
         ]
         return newTask2

    })
    console.log(text);
};

    return (
        <section className='todoapp'>
        <NewTaskForm
        onAdd = {addItem}/> 
        <TaskList 
         tasksBody={tasks}
         onDeleted={deleteItem}/>
        <Footer/>
        </section>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App></App>)