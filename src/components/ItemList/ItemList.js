import { Col, Row, Container } from "react-bootstrap";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <Container className="container-lg">
            <Row xs={1} md={4} className="g-4">
                {products.map((product) => (
                    <Col>
                        <Item key={product.id} {...product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ItemList;
