import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container className="p-3">
       
        <Navbar.Brand href="/">
          <h1 className="fw-bold">The AceAttire</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold gap-3">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-info">
                <i className="fa-solid fa-magnifying-glass "></i>
              </Button>
            </Form>

            <Link className="nav-link" to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link className="nav-link" to="/myaccount/login">
              <i className="fa-solid fa-user"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
