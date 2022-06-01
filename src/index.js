import React, { useEffect, useState } from 'react'

import { createRoot } from 'react-dom/client';

import AppHeader from './components/AppHeader/AppHeader';

import './index.css';
import TaskList from './components/TaskList/TaskList.js';
import Footer from './components/footer/footer.js';
import NewTaskForm from './components/NewTaskForm/NewTaskForm.js';
import TasksFilter from './components/TasksFilter/TasksFilter';
const App = () => {

    let maxId = Math.random() * 1000;

    const createItem = (text) => {
        return {
            done: false,
            id:maxId++,
            taskText: text,
            state: 'view',
        };
    };

    
    let [tasks, changeTask ] = useState(
        [
            createItem('task 1'),
            createItem('task 2'),
            createItem('task 3'),
            createItem('task 4'),
        ]    
    );


let [currentTaskList, setTaskList] = useState(tasks);

    useEffect(()=>{
        setTaskList(tasks)
    },[tasks]);

    // useEffect(()=>{
    //     changeTask(tasks)
    // },[currentTaskList]);

const filterToggle = (e) => {
    const filterChildren = [...e.currentTarget.children];
     const buttonList = filterChildren.map(el => {
     return  el.firstElementChild.className = ''
    });
    e.target.classList.toggle('selected');
};


const setFilter = (e) => {

    const evenContent = e.target.textContent;
    if(evenContent === 'All'){
        setTaskList(tasks)

    }else if (evenContent === 'Active'){
        let newTasks = [...tasks].filter(el => el.done === false)
        setTaskList(newTasks)

    }else if (evenContent === 'Completed'){
        let newTasks = [...tasks].filter(el => el.done === true)
        setTaskList(newTasks)
    }

};

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
    changeTask((tasks) =>{
        const newTask = [createItem(text)]
        const newTask2 = [
           ...newTask,
            ...tasks,
        ]
        return newTask2
    });


};
const onMarkComplited = (id) => {
    changeTask((tasks) => {
        
        const idx = tasks.findIndex((el) => el.id === id);
        const oldItem = tasks[idx]
        const newTask = {...oldItem, done: !oldItem.done};
        const newTasks = [
            ...tasks.slice(0, idx),
            newTask,
            ...tasks.slice(idx + 1)
        ];
        return newTasks
    })
  
    
};

    
    const taskCounter = tasks.filter(el => el.state !== 'completed' 
    &&  el.done === !true ).length;

    return (
        <section className='todoapp'>
        <AppHeader/>
        <NewTaskForm
        onAdd = {addItem}/> 
        <TaskList 
         tasksBody={currentTaskList}
         onDeleted={deleteItem}
         onMarkComplited = {onMarkComplited}
         
         />
        <Footer 
        taskCounter={taskCounter}
        setFilter = {setFilter}
        filterToggle={filterToggle}
        />
        </section>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App></App>)




// let [tasks, changeTask ] = useState(
//     [
//         {
//         id:maxId + 2,
//         taskText: 'Completed task',
//         state: 'completed',
//         },
//         {
//         id:maxId + 3,
//         taskText: 'Editing task',
//         state: 'editing',
//         },
//         {
//         id:maxId + 4,
//         taskText: 'Completed task',
//         state: 'completed',
//         },
//         {
//         id:maxId+ 5,
//         taskText: 'Active task',
//         state: 'view',
//         },
//         {
//         id:maxId+ 6,
//         taskText: 'Active task',
//         state: 'view',
//         },
//         {
//         id: maxId + 7,
//         taskText: 'Editing test',
//         state: 'editing',
//         },
//     ]    
// );