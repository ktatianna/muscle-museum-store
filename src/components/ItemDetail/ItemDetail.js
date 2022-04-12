import { Button } from "react-bootstrap";
import "./ItemDetail.css"

const ItemDetail = ({ title, image, category, description, medium, autor, price }) => {
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
                            <p className="card-text"><small className="text-muted">{category}</small></p>
                            <Button variant="dark">Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ItemDetail;
