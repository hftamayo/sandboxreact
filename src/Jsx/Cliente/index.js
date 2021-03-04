import React from 'react';
import NuevoCliente1 from './NuevoCliente1';
import Nuevocliente2 from './NuevoCliente2';
import Nuevocliente3 from './NuevoCliente3';
import Nuevocliente4 from './NuevoCliente4';
import Nuevocliente5 from './NuevoCliente5';
import VerClientes1 from './VerClientes1';
import '../../App.css';

function verclientes(){

    return(
        <div>
            <div className="cajatipo0">
                <NuevoCliente1 />
                <Nuevocliente2 />
                <Nuevocliente3 nombre="Lionel Messi" edad="33">Hobbies: Jugar Play</Nuevocliente3>
                <Nuevocliente4 nombre="Ansu Fati" edad="19">Hobbies: Jugar NES</Nuevocliente4>
                <Nuevocliente5 nombre="Lebron James" edad="30">Hobbies: Jugar BKB</Nuevocliente5>            
            </div>
            <div>
                <VerClientes1 />
                <p>Uso de componentes functional</p>
            </div>
        </div>
    )

}

export default verclientes;