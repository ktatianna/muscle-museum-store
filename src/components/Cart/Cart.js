import { Table, Button, Modal } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import './Cart.css';
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import Checkout from "../Checkout/Checkout";


const Cart = () => {

  const { cart, removeItem, getTotal, getQuantity, clearCart } = useContext(CartContext)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  if (getQuantity() === 0) {
    return (
      <div className="alert alert-warning alert-cart" role="alert">
        No hay productos agregados
        <br />
        <NavLink to='/'>Ver productos</NavLink>
      </div>
    )
  }
  return (
    <div className="cart-container">
      <Table responsive hover bordered >
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.title} </td>
              <td>{prod.price} </td>
              <td>{prod.quantity} </td>
              <td>{prod.quantity * prod.price}</td>
              <td>
                <Button
                  variant="dark"
                  size="sm"
                  onClick={() => removeItem(prod.id)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>Total carrito</td>
            <td>{getTotal()}</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
      <Button
        variant="dark"
        className="cart-btn"
        onClick={() => clearCart()}
      >
        Limpiar carrito
      </Button>
      <Button className="btn btn-dark cart-btn" onClick={handleShow}>Checkout</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Checkout/>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Cart

