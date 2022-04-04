import { useEffect } from 'react'
import { Container } from "react-bootstrap";

import ItemList from '../ItemList/ItemList';


const ItemListContainer = ( props ) => {
    return(
        <Container>
            <h1>{props.greeting}</h1>
            <ItemList products={""}/>
        </Container>
    )
}

export default ItemListContainer;