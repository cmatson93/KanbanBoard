import React from 'react';

const Input = (props) => {
    return (
        <div className="input-contianer">
            <input id="task" name={props.name} onChange={(event) => props.onChange(event)}></input>
            <button id="task-submit" onClick={() => props.onClick()}>Submit</button>
        </div>
    )
}

export default Input;