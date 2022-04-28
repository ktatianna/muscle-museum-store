import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import './ItemListContainer.css'
import { getDocs, collection, query,  where } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";
import { useParams } from 'react-router-dom';

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useEffect(() => {

        const collectionRef = categoryId
        ? query(collection(firestoreDb, 'artworks'), where('category', '==', categoryId ))
        : collection(firestoreDb, 'artworks')

        getDocs(collectionRef)
        .then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
        setLoading(false)
    }, [categoryId]);

    if(products.length === 0) { 
        return <h1>No hay productos</h1>
    }

    return (
      <>
        {loading ? (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <Container className="ItemListContainer">
            <ItemList products={products} />
          </Container>
        )}
      </>
    );
};

export default ItemListContainer;
