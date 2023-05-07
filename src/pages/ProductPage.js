import React, { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AssociatedPage } from "../components/page-components/AssociatedPage";
import { Membership } from "../components/page-components/Membership";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductAction } from "../components/redux/products-redux/productAction";
import { setCart } from "../components/redux/cart/CartSlice";

export const ProductPage = () => {
  const { selectedProduct } = useSelector((state) => state.singleProduct);
  console.log(selectedProduct);

  //_id is taken from req.params for fetching product based on that id
  // const { _id } = useParams();
  // console.log(_id);
  const { slug } = selectedProduct;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProductAction(slug));
  }, [dispatch, slug]);

  const [select, setSelect] = useState();

  const handleOnChange = (e) => {
    setSelect(e.target.value);
  };

  const handleOnAddToCart = (e) => {
    e.preventDefault();
    setCart(select);
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
              <div>
                {selectedProduct?.images?.map((item) => (
                  <img
                    src={"http://localhost:8000/" + item?.substr(6)}
                    width="50px"
                    height="50px"
                  />
                ))}
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h3 className="fw-bold"> {selectedProduct.name}</h3>
              <p> {selectedProduct.sku}</p>
              <p> {selectedProduct.price}</p>
            </div>
            <div>
              <select
                className="btn border-primary"
                required
                onChange={handleOnChange}>
                <option> Select Your Size </option>
                <option value="xs">Xs</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
            </div>

            <div className=" mt-4 d-grid">
              <Button
                variant="success"
                type="submit"
                onClick={handleOnAddToCart}
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
