import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap';

export const Header = () => {

  return (
    <Navbar bg="light" expand="md">
      <Container className='p-3'>
        <Navbar.Brand className='fw-bold' href="#home">The AceAttire</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">
          <Form  className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><i class="fa-solid fa-magnifying-glass"></i></Button>
          </Form>

            <Nav.Link href="#cart"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
            <Nav.Link href="#profile"><i class="fa-solid fa-user"></i></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
