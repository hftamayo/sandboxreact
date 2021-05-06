import React from 'react';
import Nuevoclienteb from './Person/NuevoClienteb';

const persons = (props) => 
(props.persons.map((cliente, index) => {
    return <Nuevoclienteb 
    actNombre={() => props.clicked(index)}
    nombre={cliente.nombre} 
    edad={cliente.edad}
    cambiartxt={(event) => props.changed(event, cliente.id)}
    />

    })
);

export default persons;