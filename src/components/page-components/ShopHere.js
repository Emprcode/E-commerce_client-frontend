import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ShopHere = () => {
  return (
    <div>
      <Container className="" id="shopnow">
        <Row className="mt-3 px-2 d-flex justify-content-center align-items-center gap-5 flex-wrap">
          <Col className="top rounded shopbtn ">
            <Link className="nav-link" to="/kits-jerseys">
              <h4 className="fw-bold text-light text-center">JERSEYS</h4>

              <Button variant="dark" className="shopbtn">
                Shop Football Jerseys
              </Button>
            </Link>
          </Col>

          <Col className="bottom rounded shopbtn ">
            <Link className="nav-link" to="/kits-shorts">
              <h4 className=" fw-bold text-light text-center">SHORTS</h4>
              <Button variant="dark" className="shopbtn">
                Shop Football shorts
              </Button>
            </Link>
          </Col>
          <Col className="shoes rounded shopbtn">
            <Link className="nav-link" to="/kits-boots">
              <h4 className="text-center fw-bold text-light">BOOTS</h4>
              <Button variant="dark" className="shopbtn">
                Shop Football Boots
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className="px-2 d-flex justify-content-center align-items-center gap-5 flex-wrap">
          <Col className="accessories rounded shopbtn">
            <Link className="nav-link" to="/kits-accessories">
              <h4 className="text-center fw-bold text-light">ACCESSORIES</h4>
              <Button variant="dark" className="shopbtn">
                Shop Football Accessories
              </Button>
            </Link>
          </Col>

          <Col className="kits rounded shopbtn ">
            <Link className="nav-link" to="/all-kits">
              <h4 className="text-center fw-bold text-light">All KITS</h4>
              <Button variant="dark" className="shopbtn">
                Shop All Kits
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
