import React, { useState } from "react";



const Task = ({task, onDeleted}) => {

    const [state, setState] = useState({
        done: false
    });
    
    const onMarkComplited = () => {
        console.log(state.done);
        setState((state) => {
            return {
                done: !state.done
            };
        });
    };

    let classNames = task.state

    if(state.done) {
        classNames = 'completed'
    }else{
        classNames = task.state
    }



    return (
        <li key={task.id} className={classNames}>
            <div className="view">
            <input 
            onClick={onMarkComplited}
            className="toggle" 
            type="checkbox"></input>
            <label>
                <span className="description">{task.taskText}</span>
                <span className="created">created {new Date().toLocaleTimeString()}</span>
            </label>
            <button className="icon icon-edit"  
            
            ></button>
            <button className="icon icon-destroy"
            onClick={onDeleted}
            ></button>
            </div>
            {classNames === 'editing'?
             <input type="text" 
             className="edit" 
             value={task.taskText}
             >
             </input> : '' }
        </li>
    );
};

export default Task