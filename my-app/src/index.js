import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import JSXIntroduccion from './01_JSX_Intro';
import JSXBucle from './02_JSX_Bucle';
import ContadorClic from './YouTube/Y02ContadorClic';
import Calculadora from './YouTube/Y03Calculadora';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <App />
    <hr></hr>
    <JSXIntroduccion/>
    <hr/>
    <JSXBucle/>
    <hr/>
    <ContadorClic/>
    <hr/>
    <Calculadora/>
  </React.StrictMode>
);

