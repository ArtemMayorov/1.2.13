import React, { useState } from "react";



const Task = ({task, onDeleted, onMarkComplited, editTask , onAdd, taskNewText }) => {

    let [taskText, setText] = useState(task.taskText);

    const editTaskText = (e) => {
        editTask(taskText, task.id)     
        setText(taskText)
        console.log(taskText);
    };
    const keyUpEdit = (e) => {
        if(e.keyCode == 13){
            
            e.preventDefault()
            taskNewText(taskText, task.id)
        };
    };

   


    return (
        <li key={task.id} className={task.done ? 'completed' : task.state}>
            <div className="view">
            <input 
            onClick={() => onMarkComplited(task.id)}
            className="toggle" 
            type="checkbox"></input>
            <label>
                <span className="description">{task.taskText}</span>
                <span className="created">created {new Date().toLocaleTimeString()}</span>
            </label>
            <button 
            onClick={editTaskText}
            className="icon icon-edit"  
            ></button>
            <button className="icon icon-destroy"
            onClick={onDeleted}
            ></button>
            </div>
            {task.state === 'editing'?
             <input type="text" 
             className="edit" 
             onKeyUp={keyUpEdit}
             onChange={(e)=> setText(e.target.value)}
             value={taskText}
             >
             </input> : '' }
        </li>
    );
};

export default Task