import React from 'react';
import styled from 'styled-components';

const Input = (props) => {

    // const InputContainer = styled.div`
    //     input {
    //         border: 1px solid #B2B09B;
    //         border-radius: 3px;
    //         line-height: 20px;
    //         margin: 10px;
    //     }
    //     input:focus , button:focus {
    //         outline: none;
    //         border: 2px solid #43AA8B;
    //     }
    //     button {
    //         height: 20px;
    //         border: 1px solid #B2B09B;
    //         border-radius: 3px;
    //     }
    // `;

    return (
        <div>
            <input id="task" name={props.name} onChange={(event) => props.handleChange(event)} value={props.value} key={props.key}></input>
            <button id="task-submit" onClick={(e) => props.onClick(e)}>Submit</button>
        </div>
    )
}

export default Input;