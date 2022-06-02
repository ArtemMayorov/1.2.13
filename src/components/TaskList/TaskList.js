import React from "react";

import Task from '../Task/Task.js'


const TaskList = ({tasksBody, onDeleted, onMarkComplited, stateFilter, editTask, onAdd, taskNewText }) => {
    
    return tasksBody.map((elem) => {
        console.log('TaskList onAdd ', onAdd);
        if(stateFilter === 'Completed') {

            if(elem.done === true) {
                return (
                    <ul className="todo-list">
                    <Task 
                    onAdd = {onAdd}
                    taskNewText={taskNewText}
                    editTask = {editTask}
                    onMarkComplited={onMarkComplited}
                    onDeleted ={()=> onDeleted(elem.id)}
                    task = {elem} />
                </ul>
                )
            }
        }
            if(stateFilter == 'All') {
                    return (
                        <ul className="todo-list">
                        <Task 
                        taskNewText={taskNewText}
                        onAdd = {onAdd}
                        editTask = {editTask}
                        onMarkComplited={onMarkComplited}
                        onDeleted ={()=> onDeleted(elem.id)}
                        task = {elem} />
                    </ul>
                    )
            }
            if(stateFilter == 'Active') {
                if(elem.done === false) {
                    return (
                        <ul className="todo-list">
                        <Task 
                        taskNewText={taskNewText}
                        onAdd = {onAdd}
                        editTask = {editTask}
                        onMarkComplited={onMarkComplited}
                        onDeleted ={()=> onDeleted(elem.id)}
                        task = {elem} />
                    </ul>
                    )
                }
                   
            }
        
       
        
    //     return(
    //     <ul className="todo-list">
    //          <Task 
    //          onMarkComplited={onMarkComplited}
    //          onDeleted ={()=> onDeleted(elem.id)}
    //          task = {elem} />
    //      </ul>
    // );
    })
};
//     return tasksBody.map((elem) => {
//         if(stateFilter === 'Completed') {
//             if(elem.done === true) {
//                 return (
//                     <ul className="todo-list">
//                     <Task 
//                     onMarkComplited={onMarkComplited}
//                     onDeleted ={()=> onDeleted(elem.id)}
//                     task = {elem} />
//                 </ul>
//                 )
//             }
//         } 

//         return(
//         <ul className="todo-list">
//              <Task 
//              onMarkComplited={onMarkComplited}
//              onDeleted ={()=> onDeleted(elem.id)}
//              task = {elem} />
//          </ul>
//     );
//     })
// };
export default TaskList;
