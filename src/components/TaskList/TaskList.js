import React from "react";

import Task from '../Task/Task.js'

const TaskList = () => {
    return (
        <ul className="todo-list">
            <Task/>
        </ul>
    );
};

export default TaskList