import "./ItemDetail.css"
import {Link} from "react-router-dom";
import { useState } from "react";
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ title, image, category, description, medium, autor, price, movement, stock }) => {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = (count) => {
        setQuantity(count)
    }

    return (
        <>
            <div className="card mb-3 card-container text-center">
                <div className="card-container-detail">
                    <div className="itemDetail-img" >
                        <img src={image} className=" " alt="..." />
                    </div>
                    <div className=" item-detail-body" >
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text card-autor">{autor}</p>
                            <p className="card-text"><small className="text-muted">{medium}</small></p>
                            <p>{description}</p>
                            <p className="card-text card-price"><strong>{price}</strong></p>
                            <p className="card-text"><small className="text-muted">{`${movement} - ${category}`}</small></p>
                            {quantity > 0 ? <Link className="link-dark" to='/cart'>Ir al carrito</Link> :
                                <ItemCount  onConfirm={handleAdd} stock={stock} />
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ItemDetail;
