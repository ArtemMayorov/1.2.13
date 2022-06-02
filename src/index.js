import React, { useEffect, useState } from 'react'

import { createRoot } from 'react-dom/client';

import AppHeader from './components/AppHeader/AppHeader';

import './index.css';
import TaskList from './components/TaskList/TaskList.js';
import Footer from './components/footer/footer.js';
import NewTaskForm from './components/NewTaskForm/NewTaskForm.js';
import TasksFilter from './components/TasksFilter/TasksFilter';
const App = () => {

    let maxId = Math.floor(Math.random() * 1000);

    const createItem = (text) => {
        return {
            done: false,
            id:maxId++,
            taskText: text,
            state: 'view',
        };
    };

    
    const [tasks, changeTask ] = useState(
        [
            createItem('task 1'),
            createItem('task 2'),
            createItem('task 3'),
            createItem('task 4'),
        ]    
    );

let [stateFilter, setStateFilter] = useState('All');
let [currentTaskList, setTaskList] = useState(tasks);

    useEffect(()=>{
        setTaskList(tasks)
    },[tasks]);

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
        setStateFilter('All')

    }else if (evenContent === 'Active'){
        let newTasks = [...tasks].filter(el => el.done === false)
        setTaskList(newTasks)
        setStateFilter('Active')
  
    }else if (evenContent === 'Completed'){
        let newTasks = [...tasks].filter(el => el.done === true)
        setTaskList(newTasks)
        setStateFilter('Completed')
       
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

    const clearCompleted = () => {
        changeTask(( tasks ) => {
            const newTasks = tasks.filter((el) => el.done !== true);
            return newTasks
        } );
    };

    const editTask = (taskText, id) => {

        changeTask((tasks) => {   
            const idx = tasks.findIndex((el) => el.id === id);
            const oldItem = tasks[idx]
            const newTask = {...oldItem, taskText: taskText, state: 'editing'};
            const newTasks = [
                ...tasks.slice(0, idx),
                newTask,
                ...tasks.slice(idx + 1)
            ];
            return newTasks
        })
    }

    const taskNewText = (newText, id) =>{
        console.log('newText text ', newText);
        console.log('newText id ', id);
        changeTask((tasks) => {
        
            const idx = tasks.findIndex((el) => el.id === id);
            console.log("idxxxxxxxx", idx);
            const oldItem = tasks[idx]
            const newTask = {...oldItem, taskText: newText,  state: 'view' };
            const newTasks = [
                ...tasks.slice(0, idx),
                newTask,
                ...tasks.slice(idx + 1)
            ];
            return newTasks

        })
        // console.log('taskNewText');
    }
    

    const taskCounter = tasks.filter(el => el.state !== 'completed' 
    &&  el.done === !true ).length;

    return (
        <section className='todoapp'>
         <header className="header">
            <h1>todos</h1>
            </header>
        <NewTaskForm
        onAdd = {addItem}
        
        setStateFilter = {setStateFilter}
        /> 
        <TaskList
         onAdd = {addItem}
        //  keyUpEdit = {keyUpEdit}
         editTask = {editTask}  
         taskNewText={taskNewText}
         stateFilter = {stateFilter}
         tasksBody={currentTaskList}
         onDeleted={deleteItem}
         onMarkComplited = {onMarkComplited}
         
         />
        <Footer 
        clearCompleted = {clearCompleted}
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