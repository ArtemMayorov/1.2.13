import React from "react";

import Task from '../Task/Task.js'

const TaskList = ({tasksBody}) => {
    return tasksBody.map((elem, index) => {
        return(
        <ul className="todo-list">
             <Task task = {elem} />
         </ul>
    );
    })
};
export default TaskList;
