import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Membership } from "../components/page-components/Membership";
import { FormComponents } from "../components/form-components/FormComponents";
import { Link } from "react-router-dom";

const Login = () => {
  const InputFields = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Email",
      required: "true",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "*****",
      required: "true",
    },
  ];
  return (
    <MainLayout>
      <div className="bgcolor">
        <Container>
          <Row className="p-5">
            <Col>
              <h2 className="fw-bold">SIGN IN</h2>
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
                    Sign In
                  </Button>
                </div>
              </Form>
              <Link className="nav-link mt-3" to="/forgotpassword">
                {" "}
                Forgot Password?
              </Link>
            </Col>

            <Col className="d-flex justify-content-center align-items-center ">
              <p className="mt-3 fw-bold text-center">
                New to AceAttire?
                <Link className="nav-link" to="/myaccount/register">
                  <div className="d-grid p-5">
                    <Button variant="dark">Register here</Button>
                  </div>
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Membership />
    </MainLayout>
  );
};

export default Login;
