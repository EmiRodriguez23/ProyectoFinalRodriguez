import '../styles/Item.css';
import { Link } from 'react-router-dom'
import React from 'react';

const Item = ({info}) => {
    return(
        <Link to={`/detalle/${info.id}`} className="games">
            <img className='w-96 h-96 border-solid border-4 border-gray-600 ' src={info.image} alt="" />
            <p className='font-mono text-3xl border-solid border-2 border-sky-500 bg-gray-600 text-center mt-3'>{info.title}</p>
        </Link>
    );
}

export default Item;