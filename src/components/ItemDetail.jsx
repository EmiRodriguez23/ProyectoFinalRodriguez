import '../styles/ItemDetail.css';

import React, {useState} from 'react';
import ItemCount from '../components/ItemCount';
import {useCartContext} from '../context/CartContext';
import {Link} from 'react-router-dom';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext();
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return(
        <div className="container">
            <div className="detail">
                <img src={data.image} alt="" className="detail_image" />
                <div className="content">
                    <h1 className='text-3xl text-black'>{data.title}</h1>
                    {
                        goToCart
                            ? <Link to='/cart'>Terminar compra</Link>
                            : <ItemCount  initial={0} stock={99} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;