import '../App.css';
import React from 'react'


function Boton ({name,clic,manejarClic}) {
   
    return (
        <>
        <button 
            className={clic ? "botonClic" : "botonReiniciar"}
            onClick = {manejarClic}>
            {name}
        </button>
        {console.log(name + " - " + clic)}
        </>
        
    );
}

export default Boton;