import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
    const stock = 7;
    const initial = 1;
    const [ count, setCount ] = useState(initial);

    const onAdd = ( condition ) => {
        if(condition === '-' && count > 1 ){
            setCount(count - 1)
        }
        if(condition === '+' && count < stock){
            setCount(count + 1)
        }
    };


    return (
        <>
            <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
        </>
    );
};

export default ItemListContainer;
