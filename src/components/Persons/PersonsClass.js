import React, { Component } from 'react';
import NClienteClass from './Person/NClienteClass';


class PersonsClass extends Component{
    render() {
        return this.props.persons.map((cliente, index) => {
            return (
                <NClienteClass 
                actNombre={() => this.props.clicked(index)}
                nombre={cliente.nombre} 
                edad={cliente.edad}
                cambiartxt={(event) => 
                    this.props.changed(event, cliente.id)}
                />            
            );
        });
    }
}
            
export default PersonsClass;