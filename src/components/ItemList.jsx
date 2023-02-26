import Item from '../components/Item';
import React from 'react';

const ItemList = ({data =[]}) => {
    return(
        data.map(katanas => <Item key={katanas.id} info={katanas} />)
    );
}

export default ItemList;