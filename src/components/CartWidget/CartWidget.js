import cartIcon from "./cart.png";

const CartWidget = () => {
  return (
    <div className="d-flex">
      <div className="navbar-brand  mb-0 h1 icon-cart">
        <span className="badge bg-danger badgeCart cartIcon">7</span>
        <img
          src={cartIcon}
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-text-top cartIcon"
        />
      </div>
    </div>
  );
};

export default CartWidget;
