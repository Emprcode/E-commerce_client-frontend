import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container, Row } from "react-bootstrap";
import { Membership } from "../components/page-components/Membership";
import { Oauth } from "../components/utils/Oauth";

const Login = () => {
  return (
    <MainLayout>
      <div className="">
        <Container className="p-4">
          <div className="mt-4">
            <h2 className="p-3 fw-bold">SIGN IN </h2>
            <hr />
          </div>
          <Row className="p-5 d-flex justify-content-center align-items-center flex-column">
            <h4 className="fw-bold text-center">Login with google</h4>
            <Oauth />
          </Row>
        </Container>
      </div>

      <Membership />
    </MainLayout>
  );
};

export default Login;
