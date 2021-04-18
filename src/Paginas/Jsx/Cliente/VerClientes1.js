/* ejemplo de class based component
siempre debe heredar de la clase Component
*/

import React, {Component} from 'react';
import NuevoCliente1 from './NuevoCliente1';
import NuevoCliente2 from './NuevoCliente2';
import NuevoCliente3 from './NuevoCliente3';
import nuevoclientev4a from './NuevoCliente4a';
import nuevoclientev4b from './NuevoCliente4b';


class verclientes1 extends Component{
    render(){
        return(
            <div>
                <p>Uso de class based components</p>
                <NuevoCliente1 />
                <NuevoCliente2 />
                <NuevoCliente3 nombre='Luke SkyWalker' edad='25'/>
                <nuevoclientev4a nombre='Han Solo' edad='30' />
                <nuevoclientev4b nombre='Leia Organa' edad='22' />
            </div>
        )
    }
}

export default verclientes1