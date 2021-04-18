import React from 'react';

/*
uso de props:
-props -> propiedad (parametros)
-en java usamos parametros para trabajar con funciones getters y setters
-un props puede tener cualquier tipo de datos
-utilizacion de props en un class based component
-functional component
*/

const nuevoclientev4b = (props) => {
    return <p>Mi nombre es {props.nombre}, soy un 
        cliente y tengo {props.edad} años</p>
}
export default nuevoclientev4b;