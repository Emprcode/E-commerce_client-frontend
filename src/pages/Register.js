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
    {
      name: "cPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "*****",
      required: true,
    },
  ];

  const BillingAddress = [
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
      <div className="bgcolor">
        <Container>
          <Row className="p-5 ">
            <h2 className="fw-bold">Register Here!</h2>
            <Col>
              <Form>
                {InputFields.map((item, i) => (
                  <FormComponents key={i} {...item} />
                ))}
                <div className="d-grid col-5">
                  <Button
                    variant="dark"
                    type="submit"
                    className="rounded fw-bold">
                    {" "}
                    Register
                  </Button>
                </div>
              </Form>
            </Col>
            <Col>
              <Form>
                {BillingAddress.map((item, i) => (
                  <FormComponents key={i} {...item} />
                ))}
              </Form>
            </Col>
            <div className="p-4">
              <p>
                Creating an account means you accept our
                <span className="fw-bold"> Terms of Use </span> and
                <span className="fw-bold"> Privacy Policy </span>.
              </p>
              <Link className="nav-link mt-3 fw-bold" to="/myaccount/login">
                Already have an account?
              </Link>
            </div>
          </Row>
        </Container>
      </div>
      <Membership />
    </MainLayout>
  );
};

export default Register;
