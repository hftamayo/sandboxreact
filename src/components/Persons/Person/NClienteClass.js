import React, { Component } from 'react';
import styled from 'styled-components';

//``-> badTicks, este es un simbolo que se usa en ES6
//StyleDiv siempre debe ir en PascalCase
const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
        width: 450px;
    }
`;

class NClienteClass extends Component {
    render() {
        return (
            <StyleDiv>
                <p onClick={this.props.actNombre}>
                    Mi nombre es {this.props.nombre},
                    soy un cliente
                    y tengo {this.props.edad} años<br />
                    {this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.cambiartxt}
                    value={this.props.nombre} />
            </StyleDiv>
        );

    }
}

export default NClienteClass;
