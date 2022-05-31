import React, { useState } from "react";




function destroyTask() {
    console.log('destroyTask');
};


const Task = ({task}) => {


    let [taskBody, addState] = useState({
        incomingClass: task.state,
        description: task.taskText
    });

    function editTask(e){
        // addState({
        //     incomingClass: 'editing',
        // })
    };


    return (
        <li key={task.id} className={taskBody.incomingClass}>
            <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
                {/* <span className="description">{task.taskText}</span> */}
                <span className="description">{taskBody.description}</span>
                <span className="created">created {new Date().toLocaleTimeString()}</span>
            </label>
            <button className="icon icon-edit"  onClick={editTask}></button>
            <button className="icon icon-destroy" onClick={destroyTask}></button>
            </div>
            {taskBody.incomingClass === 'editing'?
            //  <input type="text" className="edit" value={taskBody.description}></input> : '' }
             <input type="text" 
             className="edit" 
             value={taskBody.description}
             >
             </input> : '' }
        </li>
    );
};

export default Task