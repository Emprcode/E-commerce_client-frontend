import React, { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Membership } from "../components/page-components/Membership";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAction } from "../components/redux/products-redux/productAction";
import { setCart } from "../components/redux/cart/CartSlice";
import { useParams } from "react-router-dom";
import { LatestArrival } from "../components/swiperComponents/LatestArrival";

export const ProductPage = () => {
  const { selectedProduct } = useSelector((state) => state.selectedProduct);
  console.log(selectedProduct);

  //_id or slug is taken from req.params for fetching product based on that id or slug
  const dispatch = useDispatch();

  const { slug } = useParams();

  useEffect(() => {
    dispatch(getSingleProductAction(slug));
  }, [dispatch, slug]);

  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < 5) {
      // Maximum count set to 5
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCartHandler = (e) => {
    e.preventDefault();
    const { name, description, price, thumbnail, _id } = selectedProduct;
    const obj = {
      shopQty: count,
      name,
      description,
      price,
      thumbnail,
      _id,
    };
    dispatch(setCart(obj));

    window.scrollTo(0, 0);
  };

  return (
    <MainLayout>
      <Container className="p-4 mt-5">
        <Row>
          <Col className="d-column">
            <div className="d-flex justify-content-center gap-3">
              <img
                src={selectedProduct?.thumbnail}
                width="250px"
                // height="350px"
                alt="product"
                className="rounded"
              />
            </div>
            {/* <div className="d-flex justify-content-center gap-3 p-4 rounded">
              {selectedProduct?.images?.map((item, i) => (
                <img
                  key={i}
                  src={
                    process.env.REACT_APP_IMAGE_API +
                    selectedProduct?.images[i]?.substr(6)
                  }
                  width="50px"
                  height="50px"
                  alt="product"
                />
              ))}
            </div> */}
          </Col>

          <Col>
            <div>
              <h3 className="fw-bold"> {selectedProduct.name}</h3>
              <p> {selectedProduct.sku}</p>
              <p className="fw-bold h5"> $ {selectedProduct.price}.00</p>
            </div>
            <Form onSubmit={addToCartHandler}>
              <div className="d-flex  align-items-center gap-2">
                <Button
                  onClick={handleDecrease}
                  variant="none"
                  className="border-0 border-dark"
                >
                  <i className="fa-solid fa-minus"></i>
                </Button>
                <p className="fw-bold mt-3  "> {count}</p>
                <Button
                  onClick={handleIncrease}
                  variant="none"
                  className="border-0 border-dark"
                >
                  <i className="fa-solid fa-plus"></i>
                </Button>
              </div>

              <div className=" mt-4 d-grid">
                <Button
                  variant="dark"
                  type="submit"
                  className="fw-bold cartbtn"
                >
                  ADD TO CART
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row className="p-4">
          <p className="fw-bold h5">Product Info</p>
          <hr />
          <p>{selectedProduct.description}</p>
        </Row>
      </Container>
      <LatestArrival />
      <Membership />
    </MainLayout>
  );
};
