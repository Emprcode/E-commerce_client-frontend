import React, { useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CardComponents } from "../components/card/CardComponents";
import { AssociatedPage } from "../components/page-components/AssociatedPage";
import { Membership } from "../components/page-components/Membership";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ProductPage = () => {

  const {products} = useSelector((state) => state.product)



  const {_id} = useParams()
  console.log(_id)
  const [select, setSelect] = useState();

  const handleOnChange = (e) => {
    setSelect(e.target.value);
  };
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
            {/* product image here */}

            <CardComponents />
          </Col>
          <Col>
            <div>
              <h3 className="fw-bold"> Jordan Nike Air Max</h3>
              <p> Men Tops</p>
              <p> $150</p>
            </div>
            <div>
              <select
                className="btn border-primary"
                value={select}
                onChange={handleOnChange}>
                <option> Select Your Size </option>
                <option>Xs</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
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
