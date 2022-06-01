import React, {useState} from 'react';
// import ReactDom from 'react-dom';



const NewTaskForm = ({onAdd, stateFilter, setStateFilter}) => {
      
    let [label, setLabel] = useState('');
    console.log("label",label );
    const chageInput = (e) => {
        setLabel(e.target.value)
    };
    const KeyUp = (e) => {

 
        if(e.keyCode == 13){
            console.log('setStateFilter', stateFilter);
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
export default NewTaskForm;


// <input type='text' className="new-todo" placeholder="What needs to be done?" autofocus>
