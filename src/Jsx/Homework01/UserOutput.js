/*
general purpose: display a generic paragraph, receive props from UserInput component
funcional component
*/

import React, { useState } from 'react';
import './Homework.css';

const UserOutput = props => {

    const [studentsState, setStudentsSate] = useState({
        students: [
            {name: 'Huey Dumbar'},
            {name: 'Luis Enrique'},
            {name: 'Marc Anthony'},
            {name: 'Porfi Baloa'},
        ]
    });

    const updateNamesHandler = () => {
        setStudentsSate({
            students: [
                {name: 'Luis Miguel'},
                {name: 'Julio Iglesias'},
                {name: 'Jose Jose'},
                {name: 'El Puma'},
            ]            
        });
    }


    return(
        <div className="paragraph">
            <p className="title">
                CS Bachelor Degree by Null Academy
            </p>
            <p className="content">
                Hereby, the student <span>{studentsState.students[0]}</span> is acredited as
                Bachelor degree in Computing Science by HT
                Academy.
            </p>            
            <p className="content">
                Hereby, the student <span>{studentsState.students[1]}</span> is acredited as
                Bachelor degree in Computing Science by HT
                Academy.
            </p>                        
            <p className="content">
                Hereby, the student <span>{studentsState.students[2]}</span> is acredited as
                Bachelor degree in Computing Science by HT
                Academy.
            </p>                                    
            <p className="content">
                Hereby, the student <span>{studentsState.students[3]}</span> is acredited as
                Bachelor degree in Computing Science by HT
                Academy.
            </p>                                    
        </div>
    )

}

export default UserOutput;