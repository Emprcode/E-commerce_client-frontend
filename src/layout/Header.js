import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { cart } = useSelector((state) => state.cartItems);

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
              {" "}
              <h5>
                {cart.length > 0 ? (
                  <i className="fa-solid fa-cart-shopping fa-beat"></i>
                ) : (
                  <i className="fa-solid fa-cart-shopping"></i>
                )}
              </h5>
            </Link>
            <Link className="nav-link" to="/myaccount/login">
              <h5>
                {" "}
                <i className="fa-solid fa-user"></i>
              </h5>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
