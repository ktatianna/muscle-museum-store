import { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";

import getArtworks from '../../utils/getArtworks';

import ItemList from '../ItemList/ItemList';


const ItemListContainer = ( props ) => {

    const[products, setProducts] = useState([])

    useEffect(() => {
        getArtworks().then(artworks => setProducts(artworks)).catch(error => console.log(error));
    }, [])

    return(
        <Container>
            <h1 className='text-center'>{props.greeting}</h1>
            <ItemList products={products}/>
        </Container>
    )
}

export default ItemListContainer;