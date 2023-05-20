import React, { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { AssociatedPage } from "../components/page-components/AssociatedPage";
import { Membership } from "../components/page-components/Membership";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAction } from "../components/redux/products-redux/productAction";
import { setCart } from "../components/redux/cart/CartSlice";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { selectedProduct } = useSelector((state) => state.selectedProduct);
  console.log(selectedProduct);

  //_id or slug is taken from req.params for fetching product based on that id or slug
  const dispatch = useDispatch();

  const { slug } = useParams();
  // console.log(slug);

  useEffect(() => {
    dispatch(getSingleProductAction(slug));
  }, [dispatch, slug]);

  // const filteredproduct = selectedProduct.length
  //   ? selectedProduct.find((item) => item.slug === slug)
  //   : [];

  // console.log(filteredproduct);

  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };
  console.log(count);

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
    console.log(obj);
    // toast.success("Item added to cart");
    dispatch(setCart(obj));
    // localStorage.setItem(
    //   "cartItems",
    //   JSON.stringify(store.getState().cartItems.cart)
    // JSON.stringify(obj)
    // );

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
            <Form onSubmit={addToCartHandler}>
              <div className="d-flex  align-items-center gap-3">
                <Button
                  onClick={handleDecrease}
                  variant="none"
                  className="border border-dark">
                  <i className="fa-solid fa-minus"></i>
                </Button>
                <p className="fw-bold mt-3  "> {count}</p>
                <Button
                  onClick={handleIncrease}
                  variant="none"
                  className="border border-dark">
                  <i className="fa-solid fa-plus"></i>
                </Button>
              </div>

              <div className=" mt-4 d-grid">
                <Button
                  variant="success"
                  type="submit"
                  // onClick={() => addToCartHandler()}
                  className="fw-bold cartbtn">
                  ADD TO CART
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr />
      <AssociatedPage />
      <Membership />
    </MainLayout>
  );
};
