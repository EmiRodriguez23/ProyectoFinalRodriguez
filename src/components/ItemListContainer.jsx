import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
import Title from '../components/Title';
import React, {useState, useEffect} from 'react';


const katanas = [
    {id: 1, image:"https://eltrentino.com/wp-content/uploads/2020/07/KAMASDG01-1.jpg", title:"Katana"},
    {id: 2, image:"https://static.vecteezy.com/system/resources/previews/007/121/147/original/katana-black-and-white-icon-silhouette-design-element-on-isolated-white-background-free-vector.jpg", title: "Katana" },
    {id: 3, image:"https://thumbs.dreamstime.com/b/arma-de-sai-aislada-26415467.jpg", title: "Sai" },
];


export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(katanas);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;