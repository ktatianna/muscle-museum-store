import { Card, Button } from "react-bootstrap";

const Item = ({ title, image, category, autor }) => {
  console.log(image)
  return (
    <Card style={{ width: "18rem" }} className = " h-100 text-center">
      <Card.Img variant="top" src={image} atl={title} className =" h-100"/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p class="fs-6">{autor}</p>
        <Button variant="dark">Buy</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
