import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import {useCartContext} from '../context/CartContext';
import ItemCart from './itemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    
    const order ={
        buyer: {
            name: 'Pablo',
            email: 'pablo@gmail.com',
            phone: '123123',
            adress: 'asdd'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleCLick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }

    if (cart.length === 0){
        return(
            <>
                <p className='text-2xl text-red-600 pb-7 '>No hay elemetos en el carrito</p>
                <Link className='font-mono text-2xl border-solid border-2 rounded-full border-sky-500  text-center mt-5 transition ease-in-out delay-150 bg-gray-600 ' to='/'>Hacer compras</Link>
            </>
        );
    }

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p className='text-2xl text-black'>
                Total: {totalPrice()}
            </p>
            <button className='text-black bg-gray-400 ' onClick={handleCLick}>Emitir Compra</button>
        </>
    )
}

export default Cart;