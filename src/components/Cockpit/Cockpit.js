import React from 'react';
import classes from './Cockpit.css';
import styled from 'styled-components';

//adding Styled components to the button
const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red': 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
        color: black;
    }
`;

const cockpit = (props) => {
    //red y bold son nombre de clases en styles.css
    const classes = []; 
    if(props.state.persons.length <= 2){
        classes.push('red'); // classes = ['red']
    }
    if(props.state.persons.length <= 1){
        classes.push('bold'); //classes = ['red', 'bold']
    }
    
    return (
        <div>
            <p className={classes.join(' ')}>Uso de listas dinamicas</p>
            <StyledButton alt={props.showClientes} 
            onClick={props.clicked}>Switch Name1
            </StyledButton>

        </div>
    );
};

export default cockpit;