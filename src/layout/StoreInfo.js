import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StoreInfo = () => {
  return (
    <div>
      <Container className="">
        <Row className="p-5 d-flex gap-3 storeinfo">
          <Col className="col-md-4">
            <h2 className="fw-bold">aceXsports</h2>
            <p>
              Visit our store for the latest and trending streetwear from most
              popular brands available.
            </p>
          </Col>
          <Col className="secondCol">
            <h2 className="fw-bold"> Links</h2>
            <div className="d-flex justify-content-center flex-column gap-4">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/cart">
                cart
              </Link>
              <Link className="nav-link" to="/myaccount/login">
                My Account
              </Link>
            </div>
          </Col>
          <Col className="col-md-3">
            <h2 className="fw-bold">Contact</h2>
            <div className="">
              <p>
                <i className="fa-solid fa-location-dot "></i> Sydney, Australia
              </p>
              <p>
                <i className="fa-solid fa-phone "></i> 0412354568
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>{" "}
                ouremail@acexsports.com.au
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};
