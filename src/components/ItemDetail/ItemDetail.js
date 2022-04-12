import { Button } from "react-bootstrap";
import "./ItemDetail.css"

const ItemDetail = ({ title, image, category, autor, price}) => {
    return (
        <>
            <div className="card mb-3 cardContainer text-center" style={{  width: '740px' }}>
                <div className="row g-0">
                    <div className="col-md-4 itemDetail-img"  style={{ width: '60%' }}>
                    <img src={image} className="img-fluid " alt="..."/>
                    </div>
                    <div className="col-md-8" style={{ width: '40%' }}>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{autor}</p>
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
