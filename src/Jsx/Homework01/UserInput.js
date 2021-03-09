/*
general purpose: get user Input and send the prop to UserOutput
*/
import React from 'react';
import './Homework.css';

const UserInput = () => {
    return(
        <div className="form">
            <p>
                Type Student's full name:
                <input type="text" onChange={props.updateName} value={props.name}/>
            </p>
        </div>
    )
}

export default UserInput;