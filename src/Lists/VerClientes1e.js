import React, { Component } from 'react';
import Nuevocliente5b from './NuevoCliente5b';
import '../App.css';
//uso de list y states

class verclientes1d extends Component{
    
    state = {
        persons: [
            {nombre: 'Irving Jhonson', edad: 40},
            {nombre: 'Isaiah Thomas', edad: 38},            
            {nombre: 'Charles Barkley', edad: 26}
        ],
        showClientes: false
    }

    //se elimina cambiarNombresHandler por quedar deprecado

    actualizarNombresHandler = (event) => {
        this.setState({
            persons: [
                {nombre: event.target.value, edad: 1},
                {nombre: event.target.value, edad: 33},            
                {nombre: 'La Lakers', edad: 5}
            ]
        })
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    //funcion para abatir las instancias del componente, estos se van a mostrar hasta hacer click en el boton
    toggleNombresHandler = () => {
        const doesShow = this.state.showClientes;
        this.setState({showClientes: !doesShow});
    }

    render(){

        //optimizando el metodo de visualizacion dinamica de los componentes

        let clientes = null;

        if(this.state.showClientes){
            clientes = (
                <div>
                    {/*map: mapea todos los elementos en un objeto, estilo vanillaJS 
                    index ayuda a identificar que cliente borrar
                    */}
                    {this.state.persons.map((cliente, index) => {
                        return <Nuevocliente5b 
                        click={() => this.deletePersonHandler(index)}
                        nombre={cliente.nombre} 
                        edad={cliente.edad} />
                    })}
                </div>

            );
        }
        return(
            <div className="cajatipo1">
                <p>Uso de listas dinamicas</p>
                {/*si uso this.cambiaNombresHandler() cuando se dibuje el DOM
                inmediatamente se va a ejecutar. Si parentesis es una referencia*/}

                {/* cambiaremos a toggleNombresHandler para mostrar/ocultar los componentes Clientes */}
                <button onClick={this.toggleNombresHandler}>Switch Name1</button>
                {/* el codigo se ve mas limpio al hace referencia a la variable clientes
                */}
                {clientes}
            </div>    
        )
    }
}

export default verclientes1d;