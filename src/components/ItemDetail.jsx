import React from 'react';
import '../styles/ItemDetail.css';

export const ItemDetail = ({data}) => {
    return(
        <div className="container">
            <div className="detail">
                <img src={data.image} alt="" className="detail_image" />
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;