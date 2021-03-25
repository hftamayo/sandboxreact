/* ejemplo de class based component
siempre debe heredar de la clase Component
*/

import React from 'react';
import NuevoCliente1 from './NuevoCliente1';


class verclientes1 extends Component{
    render(){
        return(
            <div>
                <p>Uso de class based components</p>
                <NuevoCliente1 />
            </div>
        )
    }


}

export default verclientes1