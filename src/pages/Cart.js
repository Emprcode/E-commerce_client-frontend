import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeProductFromCart,
} from "../components/redux/cart/CartSlice";
import { checkoutSession } from "../components/helper/axiosHelper";
import { LatestArrival } from "../components/swiperComponents/LatestArrival";

const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();

  const price = cart.reduce((acc, itemPrice) => {
    return acc + parseInt(itemPrice.shopQty * itemPrice.price);
  }, 0);

  // remove one item
  const handleOnRemove = (item) => {
    dispatch(removeProductFromCart(item));
  };

  // remove all item
  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  let shipping = 0;
  if (price < 100) {
    shipping = 40;
  }

  const totalPrice = price + shipping;

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (user?._id) {
      const obj = {
        totalPrice,
      };
      const session = await checkoutSession(obj);
      console.log(session);
      if (session?.url) {
        window.location.href = session.url;
        clearCartHandler();
      }
    } else {
      window.alert("you need to login first!");
    }
  };

  return (
    <MainLayout>
      <Container>
        <div className="mt-4">
          <h2 className="p-3 fw-bold">YOUR CART </h2>
          <hr />
        </div>
        {cart.length !== 0 ? (
          <Row>
            <Col className="p-4 ">
              <p className="fw-bold">My Bag ({cart.length})</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <img
                          src={item?.thumbnail}
                          width="80px"
                          height="80px"
                          alt="product"
                        />
                      </td>
                      <td>
                        {" "}
                        {item.name}
                        <br /> ${item.price}.00
                      </td>
                      <td>{item.shopQty}</td>
                      <td>{item.price}</td>
                      <td
                        className="fw-bold btn h4 d-flex justify-content-center "
                        onClick={() => handleOnRemove(item)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col>
              <h4 className=" p-4 fw-bold">SUMMARY</h4>
              <hr />
              <div>
                <div className="d-flex justify-content-center align-items-center">
                  <p className="col-9 "> Subtotal</p>
                  <p className=""> ${price}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-center align-items-center">
                  <p className="col-9 "> Shipping</p>
                  <p className=""> ${shipping}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-center align-items-center h5 p-2">
                  <p className="col-9 fw-bold"> Total: </p>
                  <p className="fw-bold"> ${totalPrice}</p>
                </div>
              </div>

              <div className="d-grid gap-3 mb-4">
                <Button
                  type="submit"
                  variant="dark"
                  className="fw-bold cartbtn"
                  onClick={handleOnSubmit}
                >
                  Proceed to checkout
                </Button>
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="p-4 d-flex justify-content-center align-items-center flex-column">
            <p className="fw-bold">Your cart is empty.</p>
            <a href="/">
              {" "}
              <Button variant="info" className="fw-bold text-light">
                Start Shopping
              </Button>
            </a>
          </Row>
        )}
      </Container>
      <LatestArrival />
    </MainLayout>
  );
};

export default Cart;
