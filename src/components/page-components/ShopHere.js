import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ShopHere = () => {
  return (
    <div>
      <Container
        className="p-2 d-flex justify-content-center align-items-center gap-5 flex-wrap"
        id="shopnow"
      >
        <Col className="top rounded shopbtn ">
          <Link className="nav-link" to="/men-tops">
            <h4 className="fw-bold text-light text-center">TOPS</h4>

            <Button variant="dark" className="shopbtn">
              Shop Mens Tops
            </Button>
          </Link>
        </Col>

        <Col className="bottom rounded shopbtn">
          <Link className="nav-link" to="/men-bottoms">
            <h4 className=" fw-bold text-light text-center"> BOTTOMS</h4>
            <Button variant="dark" className="shopbtn">
              Shop Mens Bottoms
            </Button>
          </Link>
        </Col>
        <Col className="shoes rounded shopbtn">
          <Link className="nav-link" to="/men-footwares">
            <h4 className="text-center fw-bold text-light">FOOTWARES</h4>
            <Button variant="dark" className="shopbtn">
              Shop Mens FootWares
            </Button>
          </Link>
        </Col>
        <Col className="caps rounded shopbtn">
          <Link className="nav-link" to="/men-headwares">
            <h4 className="text-center fw-bold text-light">HEADWARES</h4>
            <Button variant="dark" className="shopbtn">
              Shop Mens Headwares
            </Button>
          </Link>
        </Col>
        <Col className="accessories rounded shopbtn">
          <Link className="nav-link" to="/men-accessories">
            <h4 className="text-center fw-bold text-light">ACCESSORIES</h4>
            <Button variant="dark" className="shopbtn">
              Shop Mens Accessories
            </Button>
          </Link>
        </Col>
      </Container>
    </div>
  );
};
