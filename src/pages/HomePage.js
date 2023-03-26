import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { MainLayout } from "../layout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="hero ">
        <div className="mt-5 d-flex flex-column gap-2 justify-content-center align-items-center">
          <h1 className="fw-bold ">Unleash your inner rebel</h1>

          <h5 className="mt-4 mb-5">
            All latest streetware stuff available here.
          </h5>

          <Button variant="" className="btn btn-dark rounded fw-bold">
            Shop Now!
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
