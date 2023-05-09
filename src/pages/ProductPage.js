import React, { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AssociatedPage } from "../components/page-components/AssociatedPage";
import { Membership } from "../components/page-components/Membership";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAction } from "../components/redux/products-redux/productAction";
import { setCart } from "../components/redux/cart/CartSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

export const ProductPage = () => {
  const { selectedProduct } = useSelector((state) => state.selectedProduct);
  console.log(selectedProduct);

  //_idor slug is taken from req.params for fetching product based on that id or slug
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const { slug } = useParams();
  // console.log(slug);

  useEffect(() => {
    dispatch(getSingleProductAction(slug));
  }, [dispatch, slug]);

  const addToCartHandler = (selectedProduct) => {
    console.log(selectedProduct);
    dispatch(setCart(selectedProduct));

    window.scrollTo(0, 0);
  };
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col className="d-column">
            <div className="d-flex justify-content-center gap-3">
              <img
                src={
                  "http://localhost:8000/" +
                  selectedProduct?.thumbnail?.substr(7)
                }
                width="250px"
                height="350px"
                alt="product"
              />

              {/* <div className="d-flex justify-content-center gap-3">
                <img
                  src={
                    "http://localhost:8000/" +
                    selectedProduct?.images[0].substr(6)
                  }
                  width="50px"
                  height="50px"
                  alt="product"
                />
              </div> */}
            </div>
          </Col>
          <Col>
            <div>
              <h3 className="fw-bold"> {selectedProduct.name}</h3>
              <p> {selectedProduct.sku}</p>
              <p> {selectedProduct.price}</p>
            </div>

            <div className=" mt-4 d-grid">
              <Button
                variant="success"
                onClick={() => addToCartHandler(selectedProduct)}
                className="fw-bold cartbtn">
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
