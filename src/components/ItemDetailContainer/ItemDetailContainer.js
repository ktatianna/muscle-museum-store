import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import ItemDetail from "../ItemDetail/ItemDetail";

import { getArtworksById } from "../../utils/getArtworks";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        getArtworksById(7)
            .then((artwork) => setProduct(artwork))
            .catch((error) => console.log(error));
    }, );

    return (
        <Container>
            <h1>soy un item  detail container </h1>
            <ItemDetail {...product}/>
        </Container>
    )
}

export default ItemDetailContainer;