import './App.css';
// uso de variables 

const name  = 'Javier';
const getAge = ()=> {
    return 18;
}
const flag = true;
const sty = {
    color: 'red'
}

function JSXIntroduccion() {
  return (
    <div  className="App">
      <h1>Introducción de JSX</h1>
      <p>
          Se llama JSX, y es una extensión de la sintaxis de JavaScript. Recomendamos usarlo con React para describir cómo 
          debería ser la interfaz de usuario. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder 
          de JavaScript.
       </p>
       <div>
          Name: { name } <br/>
          Age: { getAge() } <br/>
          <p style={sty}> { flag? 'bienvenida' : 'adios' } </p>
       </div>
    </div>
  );
}

export default JSXIntroduccion;