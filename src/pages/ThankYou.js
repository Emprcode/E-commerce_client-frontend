import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const ThankYou = () => {
  return (
    <MainLayout>
      <Container className="text-center p-4 ">
        <div className="shadow-md p-5">
          <span className="text-success">
            <AiOutlineCheckCircle size="70" />
          </span>

          <div className="thankyou">Thank you</div>

          <div className="h5 mt-5">
            We have received your order. Make sure you update your delivery
            address.
          </div>
          <Link to="/" className="d-flex justify-content-center nav-link">
            <div className="button mt-5">Back to Home</div>
          </Link>
        </div>
      </Container>
    </MainLayout>
  );
};

export default ThankYou;
