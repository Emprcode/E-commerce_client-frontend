import React, { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AssociatedPage } from "../components/page-components/AssociatedPage";
import { Membership } from "../components/page-components/Membership";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAction } from "../components/redux/products-redux/productAction";
import { setCart } from "../components/redux/cart/CartSlice";
import { Link, useParams } from "react-router-dom";
import { addToCartAction } from "../components/redux/cart/CartAction";

export const ProductPage = () => {
  const { selectedProduct } = useSelector((state) => state.singleProduct);
  // console.log(selectedProduct);

  //_idor slug is taken from req.params for fetching product based on that id or slug
  const dispatch = useDispatch();

  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    dispatch(getSingleProductAction(slug));
  }, [dispatch, slug]);

  //local state to capture size data
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleOnChange = (e) => {
    setSize(e.target.value);
  };

  const handleOnAddToCart = (e) => {
    // e.preventDefault();
    const { _id } = selectedProduct;
    const obj = { _id, size, quantity };
    console.log(obj);
    dispatch(addToCartAction(obj));
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
            <div>
              <button onClick={handleDecrement}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={handleIncrement}>+</button>
            </div>

            <div className=" mt-4 d-grid">
              <Button
                variant="success"
                type="submit"
                onClick={() => handleOnAddToCart()}
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
