import React from "react";
import { Button, Col, Container } from "react-bootstrap";

export const ShopHere = () => {
  return (
    <div>
      <Container className="p-4 d-flex justify-content-center align-items-center gap-5">
        <Col className=" top rounded  ">
          {/* <h4 className="shoptag fw-bold text-light">TOPS</h4> */}

          <Button
            variant="dark"
            className="shopbtn d-flex justify-content-center align-items-center">
            Shop Mens Tops
          </Button>
        </Col>
        <Col className="bottom rounded">
          {/* <h4 className="shoptag fw-bold text-light"> BOTTOMS</h4> */}
          <Button variant="dark" className="shopbtn">
            Shop Mens Bottoms
          </Button>
        </Col>
        <Col className="shoes rounded">
          {/* <h4 className="shoptag fw-bold text-light">FOOTWARES</h4> */}
          <Button variant="dark" className="shopbtn">
            Shop Mens FootWares
          </Button>
        </Col>
      </Container>
    </div>
  );
};
