import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
          result.text === "OK" && toast.success("You have signed up!");
          // console.log(result);
        },
        (error) => {
          error && toast.error("Unable to sign up, Please try again later!");
        }
      );
  };
  return (
    <div className="bgmembership text-center">
      <Row className="p-3">
        <h5 className="fw-bold">
          BECOME A VIP MEMBER NOW! BE THE FIRST IN LINE TO GET EXCLUSIVE KITS.
        </h5>

        <p>
          {" "}
          Sign up for our emails to receive exclusive drops and discounts.{" "}
        </p>
      </Row>
      <Form className="p-3" onSubmit={sendEmail} ref={form}>
        <Row className="d-flex justify-content-center gap-2">
          <Col xs="auto">
            <Form.Control
              placeholder="Email address"
              name="user_email"
              required
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="dark">
              Sign Up
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
