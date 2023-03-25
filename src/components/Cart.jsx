import React from 'react';
import {useCartContext} from '../context/CartContext';
import ItemCart from './itemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    if (cart.length === 0){
        return(
            <>
                <p>No hay elemetos en el carrito</p>
                <link to='/'>Hacer compras</link>
            </>
        );
    }

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                Total: {totalPrice()}
            </p>
        </>
    )
}

export default Cart;