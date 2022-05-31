import React from "react";

import Task from '../Task/Task.js'


const TaskList = ({tasksBody, onDeleted}) => {
    return tasksBody.map((elem) => {
        return(
        <ul className="todo-list">
             <Task 
             onDeleted ={()=> onDeleted(elem.id)}
             task = {elem} />
         </ul>
    );
    })
};
export default TaskList;
