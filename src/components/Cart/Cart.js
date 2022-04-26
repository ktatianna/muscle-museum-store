import { Table, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import './Cart.css';
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {

  const { cart, removeItem, getTotal } = useContext(CartContext)

  if(cart.length === 0 ) {
    return (
      <div className="alert alert-warning alert-cart" role="alert">
        No hay productos agregados
        <br/>
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
            <tr>
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
    </div>
  );
}

export default Cart