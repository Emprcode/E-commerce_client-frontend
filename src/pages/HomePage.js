import React from "react";
import { Container, Row } from "react-bootstrap";
import { MainLayout } from "../layout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="hero">
        <div className="text-center text-light h1 p-5">
          Unleash your inner rebel
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
