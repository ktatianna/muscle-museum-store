import { Card, Button } from "react-bootstrap";

const Item = ({ title, image, autor }) => {
  console.log(image)
  return (
    <Card style={{ width: "18rem" }} className = " h-100 text-center">
      <Card.Img variant="top" src={image} alt={title} className =" h-100"/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle class="fs-6">{autor}</Card.Subtitle>
        <Button variant="dark">Buy</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
