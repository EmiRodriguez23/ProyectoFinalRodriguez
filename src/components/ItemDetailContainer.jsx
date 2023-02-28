import ItemDetail from './ItemDetail';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

const games = [
    {id: 1, image:"https://eltrentino.com/wp-content/uploads/2020/07/KAMASDG01-1.jpg", category: 'accion', title:"Accion"},
    {id: 2, image:"https://static.vecteezy.com/system/resources/previews/007/121/147/original/katana-black-and-white-icon-silhouette-design-element-on-isolated-white-background-free-vector.jpg", category: 'aventura', title: "Aventura" },
    {id: 3, image:"https://thumbs.dreamstime.com/b/arma-de-sai-aislada-26415467.jpg", category: 'casuales', title: "Casuales" },
    {id: 4, image:"https://thumbs.dreamstime.com/b/arma-de-sai-aislada-26415467.jpg", category: 'supervivencia', title: "Supervivencia" },
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams(); 
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(games);
            }, 3000);
        });
        getData.then(res => setData(res.find(games => games.id === parseInt(detalleId))));
    }, [])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;