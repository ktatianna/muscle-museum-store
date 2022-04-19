import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';

import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

import { getArtworksById } from "../../utils/getArtworks";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)

    const { productId } = useParams();


    useEffect(() => {
        getArtworksById(productId)
            .then((artwork) => setProduct(artwork))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        return (() => setProduct())
    }, [productId]);

    return (
        <Container className="container-item-detail">
            {
                loading ?
                    <div class="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div> :
                    product ?
                        <ItemDetail {...product} /> :
                        <h1>El producto no existe</h1>
            }
        </Container>
    )
}

export default ItemDetailContainer;