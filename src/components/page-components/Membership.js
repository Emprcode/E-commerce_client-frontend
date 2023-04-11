import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export const Membership = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lleaztd",
        "template_7wtxtnb",
        form.current,
        "-pXoIdGuHt9INWp5G"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bgmembership text-center">
      <Row className=" m-5">
        <h5 className="fw-bold">
          BECOME A VIP MEMBER NOW! BE THE FIRST IN LINE TO DRIP HARD.
        </h5>

        <p>
          {" "}
          Sign up for our emails to receive exclusive drops and discounts.{" "}
        </p>
      </Row>
      <Form className="p-3" onSubmit={sendEmail} ref={form}>
        <Row className="d-flex justify-content-center">
          <Col xs="auto">
            <Form.Control placeholder="Email address" name="user_email" />
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
