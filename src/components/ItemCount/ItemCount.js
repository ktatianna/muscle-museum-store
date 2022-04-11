import { Button, Stack, Badge } from "react-bootstrap";

const ItemCount = ({ onAdd, stock, initial, count }) => {

  return (
    <Stack direction="horizontal" gap={3}>
      <Button variant="outline-dark" onClick={ () => onAdd('-') }>
        -
      </Button>
      <h3>
        <Badge bg="primary">{count}</Badge>
      </h3>
      <Button variant="outline-dark" onClick={ () => onAdd('+') }>
        +
      </Button>
    </Stack>
  );
};

export default ItemCount;
