import React from "react";

import Task from '../Task/Task.js'

const TaskList = (props) => {
    
    return props.map(elem => {
        console.log(elem);

        return(
        <ul className="todo-list">
             <Task state ={elem} />
         </ul>
    );
    })
};
export default TaskList
