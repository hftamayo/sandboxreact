import React from 'react';

/*
componente funcional
importar una libreria math utilizando una sintaxis especifica
se espera tener una mejor comprension del manejo del DOM
*/

const nuevocliente2 = () => {
    return <p>Mi nombre es Bruce Wayne, soy un cliente 
        y tengo {Math.floor(Math.random() * 30)} años de edad
    </p>
}

export default nuevocliente2;