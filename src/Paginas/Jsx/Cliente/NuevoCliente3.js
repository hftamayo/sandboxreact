import React from 'react';

/*
uso de props:
-props -> propiedad (parametros)
-en java usamos parametros para trabajar con funciones getters y setters
-un props puede tener cualquier tipo de datos
*/

const nuevoclientev3 = (props) => {
    return <p>
        Mi nombre es {props.nombre}, soy un cliente 
        y tengo {props.edad} años de edad.
    </p>


}

export default nuevoclientev3;