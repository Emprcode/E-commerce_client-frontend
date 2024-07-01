import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container, Row } from "react-bootstrap";
import { Membership } from "../components/page-components/Membership";
import { Oauth } from "../components/utils/Oauth";

const Login = () => {
  // const InputFields = [
  //   {
  //     name: "email",
  //     type: "email",
  //     label: "Email",
  //     placeholder: "Email",
  //     required: "true",
  //   },
  //   {
  //     name: "password",
  //     type: "password",
  //     label: "Password",
  //     placeholder: "*****",
  //     required: "true",
  //   },
  // ];
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

          {/* <Row className="p-5">
            <Col>
              <Form>
                {InputFields.map((item, i) => (
                  <FormComponents key={i} {...item} />
                ))}
                <div className="d-grid col-lg-5">
                  <Button
                    variant="dark"
                    type="submit"
                    className="rounded fw-bold rounded-pill"
                  >
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
          </Row> */}
        </Container>
      </div>

      <Membership />
    </MainLayout>
  );
};

export default Login;
