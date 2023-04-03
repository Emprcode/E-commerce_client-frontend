import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Membership } from "../components/page-components/Membership";
import { FormComponents } from "../components/form-components/FormComponents";
import { Link } from "react-router-dom";

const Register = () => {
  const InputFields = [
    {
      name: "fName",
      type: "text",
      label: "First Name",
      placeholder: "Sam",
      required: true,
    },
    {
      name: "lName",
      type: "text",
      label: "Last Name",
      placeholder: "Smith",
      required: true,
    },
    {
      name: "phone",
      type: "number",
      label: "Phone Number",
      placeholder: "0123456789",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "*****",
      required: true,
    },
  ];

  const BillingAddress = [
    {
      name: "country",
      type: "text",
      label: "Country",
      placeholder: "Australia",
      required: true,
    },
    {
      name: "address",
      type: "text",
      label: "Address",
      placeholder: "Your delivery address",
      required: true,
    },
  ];
  return (
    <MainLayout>
      <Row className="p-5">
        <Col>
          <h2 className="fw-bold">Register Here!</h2>
          <Form>
            {InputFields.map((item, i) => (
              <FormComponents key={i} {...item} />
            ))}
            <div className="d-grid col-5">
              <Button variant="dark" type="submit" className="rounded fw-bold">
                {" "}
                Sign In
              </Button>
            </div>
          </Form>
          <Link className="nav-link mt-3" to="/forgotpassword">
            {" "}
            Forgot Password?
          </Link>
        </Col>
        <Col>
          <h4>Billing address</h4>
          {BillingAddress.map((item, i) => (
            <FormComponents key={i} {...item} />
          ))}
        </Col>
      </Row>
      <Membership />
    </MainLayout>
  );
};

export default Register;
