import React from "react";

import Task from '../Task/Task.js'


const TaskList = ({tasksBody, onDeleted, onMarkComplited, }) => {
    console.log('done', tasksBody.done);
    return tasksBody.map((elem) => {
        return(
        <ul className="todo-list">
             <Task 
             onMarkComplited={onMarkComplited}
             onDeleted ={()=> onDeleted(elem.id)}
             task = {elem} />
         </ul>
    );
    })
};
export default TaskList;
