import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Container, Form } from "react-bootstrap";
import { Membership } from "../components/page-components/Membership";
import { FormComponents } from "../components/form-components/FormComponents";

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
      <Container>
        <div className="bg-warning text-center">
          <h2>SIGN IN</h2>
          <Form>
            {InputFields.map((item, i) => (
              <FormComponents key={i} {...item} />
            ))}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Membership />
    </MainLayout>
  );
};

export default Login;
