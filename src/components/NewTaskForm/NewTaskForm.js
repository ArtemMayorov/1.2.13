import React, {useState} from 'react';
// import ReactDom from 'react-dom';
import PropTypes from 'prop-types'


const NewTaskForm = ({onAdd, stateFilter }) => {
      
    let [label, setLabel] = useState('');
    console.log("label",label );
    const chageInput = (e) => {
        setLabel(e.target.value)
    };
    
    const KeyUp = (e) => {

 
        if(e.keyCode == 13){
            e.preventDefault()
            if(stateFilter === 'Completed') {
            }
            onAdd(label)
            setLabel('')
        };
    };

    return (
        <input
        className="new-todo" 
        placeholder="What needs to be done?" 
        onKeyUp={KeyUp}
        onChange={chageInput}
        autoFocus
        value={label}
        ></input>
    );
};
NewTaskForm.propTypes = {
    onAdd: PropTypes.func,
    stateFilter: PropTypes.func,
};
NewTaskForm.defaultProps = {
    onAdd: null,
    stateFilter: null,
};
export default NewTaskForm;


// <input type='text' className="new-todo" placeholder="What needs to be done?" autofocus>
