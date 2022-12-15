import {useState} from 'react';

const Itemcount = () => {
    const [numero, setnumero] = useState(1);
    const sumar = () => {
        if(numero < 10)
        setnumero(numero+1)
    };
    const restar = () => {
        if(numero >1)
        setnumero(numero-1)
    };
    return (
        <div>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            {numero}
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
            <button className='btn btn-dark'>Agregar al carrito</button>
        </div>
    );
}

export default Itemcount;
