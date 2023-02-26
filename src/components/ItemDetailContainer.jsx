import ItemDetail from './ItemDetail';
import React, {useState, useEffect} from 'react';

const katanas = {id: 1, image:"https://eltrentino.com/wp-content/uploads/2020/07/KAMASDG01-1.jpg", title:"Katana"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(katanas);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;