import React, { Component } from 'react';
import ValidateText from './ValidateText';
import CharText from './CharText.js'
import './hwork02.css';

/* general purpose:
1. Input any text
2. Validate its lenght (min and max)
3. Display each letter as a char
4. if the user clicks on each one, it has to be deleted
class based components
*/


class TextMe extends Component{
    
    state = {
        letters: [
            {id: '01', nombre: 'Irving Jhonson', edad: 40},
            {id: '02', nombre: 'Isaiah Thomas', edad: 38},            
            {id: '03', nombre: 'Charles Barkley', edad: 26}
        ],
    }

    actualizarNombresHandler = (event, id) => {
        const letterIndex = this.state.letters.findIndex(eachLetter => {
            return eachLetter.id === id;
        });

        const letter = {
            ...this.state.letters[letterIndex]
        };

        letters.text = event.target.value;

        const letters = [...this.state.letters];
        letters[letterIndex] = letter;

        this.setState({
            letters: letters
        });
    }//fin de actualizarNombreHandler

    //funcion para borrar elementos de la lista
    deleteLetterHandler = (letterIndex) => {
        //const persons = this.state.persons.slice();//hace una copia del objeto original
        //antes de eliminar el objeto hacemos una copia con el spread operator
        const letters = [...this.state.letters];
        letters.splice(letterIndex, 1);  
        this.setState({letters: letters})
    }


    render(){

        let getMyText = null;
        let displayTextLength = null;
        /*
        clientes = (
            <div>
                {this.state.persons.map((cliente, index) => {
                    return <Nuevocliente5b 
                    actNombre={() => this.deletePersonHandler(index)}
                    nombre={cliente.nombre} 
                    edad={cliente.edad}
                    key={cliente.id} 
                    cambiartxt={(event) => this.actualizarNombresHandler(event, cliente.id)}
                    />
                })}
            </div>

        );
        */

        getMyText =(
            <div>
                <h3>Please type any text you want</h3>
                <input type="text" onChange={displayTextLength}/>
            </div>
        );

        displayTextLength =(
            <i>
                chibolita
            </i>
        );
        
        return(
            <div className="cajatipo1">
                <h1>Homework02: Text2Chars</h1>
                {getMyText}
                <h3>Current Text Length:</h3>
                {displayTextLength}
            </div>    
        )
    }
}

export default TextMe;