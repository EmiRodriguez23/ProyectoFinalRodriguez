import Item from '../components/Item';
import React from 'react';

const ItemList = ({data =[]}) => {
    return(
        <div className='p-6 columns-4 '>
            {data.map(games => <Item key={games.id} info={games} />)}
        </div>
    );
}

export default ItemList;