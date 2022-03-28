import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar  bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Muscle Museum Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Impresionismo</Nav.Link>
              <NavDropdown title="Posimpresionismo" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Vincent Van Gogh</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Paul Cézanne
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action5">Expresionismo</Nav.Link>
              <Nav.Link href="#action6">Arte Pop</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
