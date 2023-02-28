import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
import Title from '../components/Title';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'


const games = [
    {id: 1, image:"https://eltrentino.com/wp-content/uploads/2020/07/KAMASDG01-1.jpg", category: 'accion', title:"Accion"},
    {id: 2, image:"https://static.vecteezy.com/system/resources/previews/007/121/147/original/katana-black-and-white-icon-silhouette-design-element-on-isolated-white-background-free-vector.jpg", category: 'aventura', title: "Aventura" },
    {id: 3, image:"https://thumbs.dreamstime.com/b/arma-de-sai-aislada-26415467.jpg", category: 'casuales', title: "Casuales" },
    {id: 4, image:"https://thumbs.dreamstime.com/b/arma-de-sai-aislada-26415467.jpg", category: 'supervivencia', title: "Supervivencia" },
];


export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams(); 
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(games);
            }, 1000);
        });
        if(categoriaId){
            getData.then(res => setData(res.filter(games => games.category === categoriaId)));
        }else{
            getData.then(res => setData(res));
        }

    }, [categoriaId])

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