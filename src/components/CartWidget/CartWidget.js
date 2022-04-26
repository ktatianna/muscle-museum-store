import cartIcon from "./cart.png";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <NavLink to='/cart'>
    <div className="d-flex">
      <div className="navbar-brand  mb-0 h1 icon-cart">
        <span className="badge bg-danger badgeCart cartIcon">
          {getQuantity()}
        </span>
        <img
          src={cartIcon}
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-text-top cartIcon"
        />
      </div>
    </div>
    </NavLink>
  );
};

export default CartWidget;
