import React, {useState} from 'react';
import '../styles/ItemDetail.css';
import ItemCount from '../components/ItemCount';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false)
    const onAdd = (quantity) =>{
        setGoToCart(true);
    }

    return(
        <div className="container">
            <div className="detail">
                <img src={data.image} alt="" className="detail_image" />
                <div className="content">
                    <h1>{data.title}</h1>
                    {
                        goToCart
                            ? <link to='/cart'>Terminar Compra</link>
                            : <ItemCount initial={0} stock={99} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;