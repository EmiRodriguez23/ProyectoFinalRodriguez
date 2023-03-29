import React from 'react';
import {useCartContext} from '../context/CartContext';

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();

    return(
        <div className="itemCart">
            <img className='w-96 h-96 border-solid border-4 flex float-left ' src={product.image} alt={product.title} />
            <div className="border-2 border-sky-500 rounded-lg bg-gray-600 ml-10 p-10 w-fit text-center float-left " >
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;