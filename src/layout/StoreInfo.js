import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StoreInfo = () => {
  return (
    <div>
      <Row className="p-5">
        <Col className="col-4">
          <h2 className="fw-bold">The AceAttire</h2>
          <p>
            Visit our store for the latest and trending streetwear from most
            popular brands available.
          </p>
        </Col>
        <Col className="text-center">
          <h2 className="fw-bold">Useful Links</h2>
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
        <Col className="col-3">
          <h2 className="fw-bold">Contact</h2>
          <div>
            <p>
              <i class="fa-solid fa-location-dot fa-bounce"></i> Sydney,
              Australia
            </p>
            <p>
              <i class="fa-solid fa-phone fa-shake"></i> 0450647121
            </p>
            <p>
              <i class="fa-solid fa-envelope fa-beat-fade"></i>{" "}
              ouremail@aceattire.com.au
            </p>
          </div>
        </Col>
      </Row>
      <hr />
    </div>
  );
};
