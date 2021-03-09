//React Basics: homework 01
//htamayo
//display UserOutput and UserInput

import React from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './Homework.css';

function homework01(){
    return(
        <div className="container">
            <UserInput />
            <UserOutput />
        </div>

    )
}

export default homework01;