import React, { Component } from 'react';
import Nuevoclienteb from './NuevoClienteb';
import './styles.css';


class verclientesb extends Component{
    
    state = {
        persons: [
            {id: '01', nombre: 'Irving Jhonson', edad: 40},
            {id: '02', nombre: 'Isaiah Thomas', edad: 38},            
            {id: '03', nombre: 'Charles Barkley', edad: 26}
        ],
        showClientes: false
    }

    actualizarNombresHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.nombre = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }//fin de actualizarNombreHandler

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);  
        this.setState({persons: persons})
    }

    toggleNombresHandler = () => {
        const doesShow = this.state.showClientes;
        this.setState({showClientes: !doesShow});
    }

    render(){

        let clientes = null;

        if(this.state.showClientes){
            clientes = (
                <div>
                    {this.state.persons.map((cliente, index) => {
                        return <Nuevoclienteb 
                        actNombre={() => this.deletePersonHandler(index)}
                        nombre={cliente.nombre} 
                        edad={cliente.edad}
                        key={cliente.id} 
                        cambiartxt={(event) => this.actualizarNombresHandler(event, cliente.id)}
                        />
                    })}
                </div>

            );
        }
        //red y bold son nombre de clases en styles.css
        const classes = []; 
        if(this.state.persons.length <= 2){
            classes.push('red'); // classes = ['red']
        }
        if(this.state.persons.length <= 1){
            classes.push('bold'); //classes = ['red', 'bold']
        }


        return(
            <div className="cajatipo1">
                <p className={classes.join(' ')}>Uso de listas dinamicas</p>
                <button className="boton" onClick={this.toggleNombresHandler}>Switch Name1</button>
                {/* el codigo se ve mas limpio al hace referencia a la variable clientes
                */}
                {clientes}
            </div>    
        )
    }
}

export default verclientesb;