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

TODO:
1. aumentar el tamaño del textbox de captura de datos
2. actualizar updateTxtHandler usando spreadOperator
3. link de referencia para el msgbox: https://levelup.gitconnected.com/simple-character-counter-in-react-js-f988c696c2fb
4. propTypes: https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/


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

*/
class TextMe extends Component{
    
    state = {
        myText: '',
    }

    //metodo para actualizar el contenido del textbox
    //se usa spreadOperator para no operar de manera directa el objeto
    updateTxtHandler = (event) => {
        //ejemplo de codigo mala practica y que no es ES6
        this.setState({
            myText: event.target.value,
        });
        /*
       const newText = [...this.state.myText]
       newText.myText = event.target.value
        */       
    }

    render(){   
        return(
            <div className="cajatipo1">
                <h1>Homework02: Text2Chars</h1>
                <div>
                    <h3>Please type any text you want</h3>
                    <input type="text" width="80" placeholder="Type any text greater than 3 characters"
                    value={this.state.myText}
                    onChange={this.updateTxtHandler}
                    />
                    <h3>Using "state" to update this control simultaneously:</h3>
                    <label>{this.state.myText}</label> 
                    {this.state.myText.length>0 ?
                        <p>
                            <ValidateText myTxtLength={this.state.myText.length} />
                            <CharText text2Char={this.state.myText.split("")} />
                        </p>
                    : null
                    }
                </div>
            </div>    
        )
    }
}

export default TextMe;