import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FormComponents } from "../components/form-components/FormComponents";

const Register = () => {
  const BillingAddress = [
    {
      name: "address",
      type: "text",
      label: "Address",
      placeholder: "Your delivery address",
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
      name: "suburb",
      type: "text",
      label: "Suburb",
      placeholder: "Cronulla",
      required: true,
    },
    {
      name: "State",
      type: "text",
      label: "State",
      placeholder: "NSW",
      required: true,
    },
    {
      name: "Country",
      type: "text",
      label: "Country",
      placeholder: "Australia",
      required: true,
    },
  ];
  return (
    <>
      <div className="">
        <>
          <Row className=" p-4 d-flex justify-content-center align-items-center">
            <h4 className="fw-bold text-center">
              Update your delivery address
            </h4>

            <Col className="col-md-5 ">
              <Form>
                {BillingAddress.map((item, i) => (
                  <FormComponents key={i} {...item} />
                ))}
                <Button variant="info" className="rounded-pill px-5">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </>
      </div>
    </>
  );
};

export default Register;
