import React from "react";
import { Form } from "react-bootstrap";

export const FormComponents = ({ label, func, user, ...item }) => {
  return (
    <div className="">
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...item} onChange={func} defaultValue={user} />
      </Form.Group>
    </div>
  );
};
