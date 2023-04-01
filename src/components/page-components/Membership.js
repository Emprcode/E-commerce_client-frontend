import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const Membership = () => {
  return (
    <div className="bgmembership text-center">
      <Row className="">
        <h5 className="fw-bold">
          BECOME A VIP MEMBER NOW! BE THE FIRST IN LINE TO DRIP HARD.
        </h5>

        <p>
          {" "}
          Sign up for our emails to receive exclusive drops and discounts.{" "}
        </p>
      </Row>
      <Form className="p-3 ">
        <Row className="d-flex justify-content-center">
          <Col xs="auto">
            <Form.Control placeholder="Email address" />
          </Col>
          <Col xs="auto">
            <Button variant="dark" type="submit">
              Sign Up
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
