import ItemDetail from './ItemDetail';

import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

const games = [
    {id: 1, price: 1500, image:"https://scontent.faep9-3.fna.fbcdn.net/v/t1.6435-9/122086234_107848704445304_186449726850695125_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Dgyj9vB2LCwAX8v3pnT&_nc_oc=AQkgEi3KauO6udv5thVo7oUbxZWJouxGt_qNPvoo8wo9KbD1wnj1OhFf2k68vQKc7oc&_nc_ht=scontent.faep9-3.fna&oh=00_AfCY5vLA2K7ceCuZFc71qvWDg9qt0SOX8vwXxFcdEItZXw&oe=6424EEA1", category: 'accion', title:"Accion"},
    {id: 2, price: 1800, image:"https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/292786811_546164453769855_1581242991506280305_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CRTuWMkXEIUAX-c0que&_nc_ht=scontent.faep9-1.fna&oh=00_AfA4MA6TQCJLE_yE2UqBlS_B272ZQbckKfuSe1Ws1OzVsQ&oe=64021941", category: 'aventura', title: "Aventura" },
    {id: 3, price: 1900, image:"https://cdn.dribbble.com/users/2178167/screenshots/4917765/media/17d7e31107091877183cdcb17c691c77.png", category: 'casuales', title: "Casuales" },
    {id: 4, price: 2000, image:"https://www.seekpng.com/png/full/359-3599231_survival-games-hunger-games.png", category: 'supervivencia', title: "Supervivencia" },
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