import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../components/ItemList';
import Title from '../components/Title';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'





export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams(); 
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if(categoriaId){
            const quereyFilter = query(queryCollection, where('category', '==', categoriaId));
            getDocs(quereyFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }else{
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }

    }, [categoriaId])


    return(
        <>
            <div className='columns-1'>
                <Title greeting={texto} />
                <ItemList data={data}/>
            </div>
        </>
    );
}

export default ItemListContainer;