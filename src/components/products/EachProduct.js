import React from "react";
import { MainLayout } from "../../layout/MainLayout";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { CardComponents } from "../card/CardComponents";
import { AssociatedPage } from "../page-components/AssociatedPage";
import { Membership } from "../page-components/Membership";

export const EachProduct = () => {
  return (
    <MainLayout>
      <Breadcrumb className="m-2">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/mentops">MenTops</Breadcrumb.Item>
        <Breadcrumb.Item active>Tops</Breadcrumb.Item>
      </Breadcrumb>
      <hr />
      <Container>
        <Row>
          <Col>
            <CardComponents />
          </Col>
          <Col>
            <div>
              <h3 className="fw-bold"> Jordan Nike Air Max</h3>
              <p> Men Tops</p>
              <p> $150</p>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="info border-1" id="dropdown-basic">
                  Select Your Size
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/xs">Xs</Dropdown.Item>
                  <Dropdown.Item href="/s">S</Dropdown.Item>
                  <Dropdown.Item href="m">M</Dropdown.Item>
                  <Dropdown.Item href="l">L</Dropdown.Item>
                  <Dropdown.Item href="xl">XL</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className=" mt-4 d-grid">
              <Button variant="success" className="fw-bold cartbtn">
                ADD TO CART
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <AssociatedPage />
      <Membership />
    </MainLayout>
  );
};
