import '../styles/Item.css';
import { Link } from 'react-router-dom'
import React from 'react';

const Item = ({info}) => {
    return(
        <Link to={`/detalle/${info.id}`} className="games ">
            <img className='w-96 h-96 border-solid border-4  border-black transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 ' src={info.image} alt="" />
            <p className='font-mono text-3xl border-solid border-2 rounded-full border-sky-500  text-center mt-5 transition ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>{info.title}</p>
        </Link>
    );
}

export default Item;