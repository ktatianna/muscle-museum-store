import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";

import CartWidget from '../../components/CartWidget/CartWidget';

import { useContext } from "react"
import CartContext from "../../context/CartContext"

import { firestoreDb } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";

const NavBar = () => {
  const { cart } = useContext(CartContext)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getDocs(collection(firestoreDb, 'categories'))
    .then(response => {
      const categories = response.docs.map(doc => { 
        return {id: doc.id, ...doc.data()}
      })
      setCategories(categories)
    })
  }, [])

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <NavLink to='/' className="navbar-brand">Muscle Museum Store</NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to='/' className="nav-link">Home</NavLink>
              {categories.map(cat =>
              <NavLink key={cat.id} to={`/category/${cat.id}`}
                className="nav-link"
              >
                {cat.description}
              </NavLink>)}
            </Nav>
          </Navbar.Collapse>
          { cart.length > 0 && 
            <CartWidget />
          }
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
