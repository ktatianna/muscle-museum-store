import { Button, Container } from "react-bootstrap";
import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ onConfirm, stock, initial = 0 }) => {
  const [count, setCount] = useState(initial);
  console.log(stock)

  const increment = () => {
    if (count < stock) setCount(count + 1)
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <Container className="counter-container Container">
      <div className="counter">
        <Button variant="outline-dark" onClick={decrement}>
          -
        </Button>
        <div className="badge-counter">
          <h6>{count}</h6>
        </div>
        <Button variant="outline-dark" onClick={increment}>
          +
        </Button>
      </div>
      <Button className="add-button" variant="dark" onClick={() => onConfirm(count)}>
        Add to cart
      </Button>
    </Container>
  );
};

export default ItemCount;
