import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import './ItemListContainer.css'
import { getArtworks } from "../../utils/getArtworks";
import { useParams } from 'react-router-dom';

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getArtworks(categoryId)
            .then((artworks) => setProducts(artworks))
            .catch((error) => console.log(error));
    }, [categoryId]);

    return (
        <Container className="ItemListContainer">
            <ItemList products={products} />
        </Container>
    );
};

export default ItemListContainer;
