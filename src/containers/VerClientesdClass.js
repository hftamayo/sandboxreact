import React, { Component } from "react";
import NClienteClass from "../components/Persons/Person/NClienteClass";
import PersonsClass from "../components/Persons/PersonsClass";
import Cockpit from "../components/Cockpit/Cockpit";

class VerClientesdClass extends Component {
  state = {
    persons: [
      { id: "01", nombre: "Irving Jhonson", edad: 40 },
      { id: "02", nombre: "Isaiah Thomas", edad: 38 },
      { id: "03", nombre: "Charles Barkley", edad: 26 },
    ],
    showClientes: false,
    changeCounter: 0,
  };

  actualizarNombresHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.nombre = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  }; //fin de actualizarNombreHandler

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  toggleNombresHandler = () => {
    const doesShow = this.state.showClientes;
    this.setState({ showClientes: !doesShow });
  };

  render() {
    let clientes = null;

    if (this.state.showClientes) {
      clientes = (
        <PersonsClass
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.actualizarNombresHandler}
        />
      );
    }
    return (
      <div className="cajatipo1">
        <Cockpit
          tituloApp={this.props.appTitle}
          showClientes={this.state.showClientes}
          clientes={this.state.persons}
          clicked={this.toggleNombresHandler}
        />
        {clientes}
      </div>
    );
  }
}

export default VerClientesdClass;
