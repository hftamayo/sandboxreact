/* ejemplo de class based component
siempre debe heredar de la clase Component
*/

import React, {Component} from 'react';

class verclientes2 extends Component{
    state {
        vendedoresPermanentes = [
            {nombre='Lionel Messi', edad='34'},
            {nombre='Luis Suarez', edad='35'},
            {nombre='Marc Ter Stegen', edad='28'},
            {nombre='Frenkie DeJong', edad='27'},                                    
        ]
    };
    render(){
        return(
            <div>
                <p>Distribucion de Vendedores</p>
            </div>
        )
    }
}

export default verclientes2