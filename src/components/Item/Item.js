import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({ id, title, image, autor, price, category }) => {
  return (
    <div className="card cardItem text-center">
      <div className="cardItem-img">
        <img src={image} className="img-fluid " alt="..."/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{autor}</p>
        <h6>{price}</h6>
        <p className="card-text card-item-category"><small className="text-muted">{category}</small></p>
        <Link to ={`/item/${id}`} className="btn btn-dark">Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
