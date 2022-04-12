import { Button } from "react-bootstrap";
import "./Item.css";

const Item = ({ title, image, autor, price }) => {
  console.log(image);
  return (
    <div className="card cardItem text-center">
      <div className="cardItem-img">
        <img src={image} className="img-fluid " alt="..."/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{autor}</p>
        <h6>{price}</h6>
        <Button variant="dark">Add to cart</Button>
      </div>
    </div>
  );
};

export default Item;
