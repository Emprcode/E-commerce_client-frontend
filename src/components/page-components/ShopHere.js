import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ShopHere = () => {
  return (
    <div>
      <Container className="p-4 d-flex justify-content-center align-items-center gap-5">
        <Col className=" top rounded shopbtn ">
          <Link className="nav-link" to="/mentops">
            <h4 className="fw-bold text-light text-center">TOPS</h4>

            <Button variant="dark" className="shopbtn">
              Shop Mens Tops
            </Button>
          </Link>
        </Col>

        <Col className="bottom rounded shopbtn">
          <Link className="nav-link" to="/menbottoms">
            <h4 className=" fw-bold text-light text-center"> BOTTOMS</h4>
            <Button variant="dark" className="shopbtn">
              Shop Mens Bottoms
            </Button>
          </Link>
        </Col>
        <Col className="shoes rounded shopbtn">
          <Link className="nav-link" to="/menfootwares">
            <h4 className="text-center fw-bold text-light">FOOTWARES</h4>
            <Button variant="dark" className="shopbtn">
              Shop Mens FootWares
            </Button>
          </Link>
        </Col>
      </Container>
    </div>
  );
};
