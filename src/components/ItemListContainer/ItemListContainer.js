import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { getArtworks } from "../../utils/getArtworks";

import ItemList from "../ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = (props) => {
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

    useEffect(() => {
        getArtworks()
            .then((artworks) => setProducts(artworks))
            .catch((error) => console.log(error));
    }, []);

    return (
        <Container>
            <h1 className="text-center">{props.greeting}</h1>
            <ItemList products={products} />
            <ItemDetailContainer/>
        </Container>
    );
};
//<ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
export default ItemListContainer;
