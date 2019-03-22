import React from 'react';

const Input = (props) => {
    return (
        <div className="input-contianer">
            <input id="task" name={props.name} onChange={(event) => props.onChange(event)} value={props.value}></input>
            <button id="task-submit" onClick={(e) => props.onClick(e)}>Submit</button>
        </div>
    )
}

export default Input;