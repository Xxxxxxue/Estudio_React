import '../App.css';

function Cuadro({count}) {
    return(
        <div className='cuadro'>
            {count}
            {console.log(count)}
        </div>
    )
}

export default Cuadro;


