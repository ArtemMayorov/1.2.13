import React from "react";

import Task from '../Task/Task.js'

const TaskList = ({tasksBody}) => {
    console.log(tasksBody);
    return tasksBody.map(elem => {
        console.log(elem);
        return(
        <ul className="todo-list">
             <Task task = {elem} />
         </ul>
    );
    })
};
export default TaskList;
