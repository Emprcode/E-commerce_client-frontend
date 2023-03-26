import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const ShopHere = () => {
  return (
    <div>
      <div className="p-4 d-flex justify-content-center align-items-center gap-5">
        <Col className="top rounded">
          <div className="btn btn-dark btnbtn">Shop Mens Top</div>
        </Col>
        <Col className="bottom rounded">
          <div className="btn btn-dark btnbtn">Shop Mens bottom</div>
        </Col>
        <Col className="shoes rounded">
          <div className="btn btn-dark btnbtn">Shop Mens FootWare</div>
        </Col>
      </div>
    </div>
  );
};
