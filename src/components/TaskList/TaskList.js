import React from "react";
import PropTypes from 'prop-types'
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
    })
};
TaskList.propTypes = {
    tasksBody: PropTypes.shape({
        done: PropTypes.bool,
        id: PropTypes.number,
        taskText: PropTypes.string,
        state: PropTypes.string,
    }),
    onDeleted: PropTypes.func,
    onMarkComplited:PropTypes.func,
    editTask:PropTypes.func,
    taskNewText: PropTypes.string,
    onAdd:PropTypes.func,
};
TaskList.defaultProps = {
    tasksBody: {
        done: true,
        id: null,
        taskText: 'null',
        state: null,
    },
    onDeleted: null,
    onMarkComplited:null,
    editTask: null,
    taskNewText: null,
    onAdd: null,

  };
export default TaskList;
