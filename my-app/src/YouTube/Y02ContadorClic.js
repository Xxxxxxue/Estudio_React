import { useEffect, useState } from 'react';
import '../App.css';
import Boton from './Y02ContadorButton';
import Cuadro from './Y02ContadorCuadro';




function ContadorClic() {

    const [count,setcount] = useState(0);
    //let id = 0;

    useEffect(()=>{
        console.log("effect");
        if(count>0){
            setcount(count+1)
        }
        
        return () => {
            manejarReiniciar();
        }
    },[count]);

    
    const manejarClic = () => {
        
        //auto incrementa
        //id = setInterval(() => {
            setcount(count+1);
        //}, 500);

    }
    const manejarReiniciar = () =>{
        //Parar auto incremento y vuelve a 0
        //clearInterval(id);
        setcount(0);
    }

    return (
        <div className='Contador'>
            <div className='App'>
                <h1 className='tituloClic'>Contador con Clic</h1>
            </div>
            <div className='contenedor-principal'>
                <Cuadro
                    count = {count}>
                </Cuadro>
                <Boton
                    clic = {true}
                    manejarClic = {manejarClic}
                    name = {'clic'}>
                </Boton>
                <Boton
                    clic = {false}
                    manejarClic = {manejarReiniciar}
                    name = {'Reiniciar'}>
                </Boton>
            </div>
        </div>
    );
}

export default ContadorClic;

//Problema: no funciona contador de auto incremento
//--------- el border de cuadro no funciona correctamente