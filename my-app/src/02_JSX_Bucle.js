import './App.css'
//

const persona = [
    {id : 1, name: 'Jose'},
    {id : 2, name: 'Maka'},
    {id : 3, name: 'Rosa'},
]


function JSXBucle () {
    return (
        <div>
            <h1 className='App'>Bucle en JSX</h1>
            <ul  className='listaBucle'>
                { persona.map(persona => <li key={persona.id}>{persona.name}</li>) }
            </ul>
        </div>
    );
}

export default JSXBucle