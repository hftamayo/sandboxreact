import React, { Component } from 'react';
import Nuevoclienteb from '../components/Persons/Person/NuevoClienteb';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class VerClientesd extends Component{
    
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
            clientes =  <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.actualizarNombresHandler}
                />;
        }
        return(
            <div className="cajatipo1">
                <Cockpit 
                showClientes={this.state.showClientes} 
                clientes={this.state.persons} 
                clicked = {this.toggleNombresHandler}
                />
                {clientes}
            </div>    
        )
    }
}

export default VerClientesd;