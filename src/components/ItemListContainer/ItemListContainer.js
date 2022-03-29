import { Container } from "react-bootstrap";
const ItemListContainer = ( props ) => {
    return(
        <Container>
            <h1>{props.greeting}</h1>
        </Container>
    )
}

export default ItemListContainer;