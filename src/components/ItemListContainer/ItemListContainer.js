import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';

import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../services/firebase/firestore";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

    getProducts(categoryId).then(products => {
      setProducts(products)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [categoryId])
  

  if (products.length === 0) {
    return <h1>No hay productos</h1>
  }


  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <Container className="ItemListContainer">
          <ItemList products={products} />
        </Container>
      )}
    </>
  );
}

export default ItemListContainer
