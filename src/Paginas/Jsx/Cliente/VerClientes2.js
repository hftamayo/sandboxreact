/* ejemplo de class based component
siempre debe heredar de la clase Component
*/

import React, {Component} from 'react';

class verclientes2 extends Component{
    state {
        jugadores = [
            {nombre='', edad=''},
            {nombre='', edad=''},
            {nombre='', edad=''},
            {nombre='', edad=''},                                    
        ]
    };
    render(){
        return(
            <div>
                <p>Uso de class based components</p>
            </div>
        )
    }
}

export default verclientes2