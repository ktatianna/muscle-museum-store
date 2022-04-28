import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';

import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)

    const { productId } = useParams();


    useEffect(() => {
        getDoc(doc(firestoreDb, 'artworks', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        })
        setLoading(false)
    }, [productId]);

    return (
        <Container className="container-item-detail">
            {
                loading ?
                    <div className="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div> :
                    product ?
                        <ItemDetail {...product} /> :
                        <h1>El producto no existe</h1>
            }
        </Container>
    )
}

export default ItemDetailContainer;