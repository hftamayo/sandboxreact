/* ejemplo de class based component
siempre debe heredar de la clase Component
*/

import React, {Component} from 'react';
import NuevoCliente1 from './NuevoCliente1';
import NuevoCliente2 from './NuevoCliente2';


class verclientes1 extends Component{
    render(){
        return(
            <div>
                <p>Uso de class based components</p>
                {/* <NuevoCliente1 />*/}
                <NuevoCliente2 />

            </div>
        )
    }


}

export default verclientes1