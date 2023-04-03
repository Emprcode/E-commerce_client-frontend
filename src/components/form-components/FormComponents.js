import React from "react";
import { Form } from "react-bootstrap";

export const FormComponents = ({ label, ...item }) => {
  return (
    <div className="">
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...item} />
      </Form.Group>
    </div>
  );
};
