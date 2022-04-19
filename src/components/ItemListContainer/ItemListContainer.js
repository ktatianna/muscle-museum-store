import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import './ItemListContainer.css'
import { getArtworks } from "../../utils/getArtworks";
import { useParams } from 'react-router-dom';

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
/*   const stock = 7;
    const initial = 1;
    const [count, setCount] = useState(initial);

const onAdd = (condition) => {
        if (condition === "-" && count > 1) {
            setCount(count - 1);
        }
        if (condition === "+" && count < stock) {
            setCount(count + 1);
        }
    };
*/
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
//<ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
export default ItemListContainer;
