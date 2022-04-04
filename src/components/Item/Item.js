import { Card } from "react-bootstrap";

const Item = ({ name, img }) => {
    
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} atl={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
