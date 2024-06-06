import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../components/redux/cart/CartSlice";
import { checkoutSession } from "../components/helper/axiosHelper";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartItems);
  console.log(cart);
  const dispatch = useDispatch();

  const price = cart.reduce((acc, itemPrice) => {
    return acc + parseInt(itemPrice.shopQty * itemPrice.price);
  }, 0);

  console.log(price);
  // remove one item
  const handleOnRemove = (item) => {
    dispatch(removeProductFromCart(item));
  };

  // remove all item
  // const clearCartHandler = () => {
  //   dispatch(clearCart());
  // };

  let shipping = 0;
  if (price < 100) {
    shipping = 40;
  }

  const totalPrice = price + shipping;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      totalPrice,
    };
    const session = await checkoutSession(obj);
    console.log(session);
    if (session?.url) {
      window.location.href = session.url;
    }
  };

  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-3 fw-bold">YOUR CART </h2>
          <hr />
        </div>
        {cart.length !== 0 ? (
          <Row>
            {/* <p>My Bag( {cart.length})</p> */}
            <Col className="p-4 ">
              <p className="fw-bold">My Bag ({cart.length})</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <img
                          src={item?.thumbnail}
                          width="80px"
                          height="80px"
                          alt="product"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.shopQty}</td>
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
              <h4 className="fw-bold">SUMMARY</h4>
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

              <div className="d-grid gap-3">
                <Button
                  type="submit"
                  variant="success"
                  className="fw-bold bg-success cartbtn"
                  onClick={handleOnSubmit}
                >
                  Proceed to checkout
                </Button>

                <p className="text-center fw-bold p-3"> or </p>
                <Button variant="warning" className="fw-bold cartbtn">
                  Paypal
                </Button>
                <Button variant="info" className="fw-bold cartbtn">
                  Apple Pay
                </Button>
                <Button variant="secondary" className="fw-bold cartbtn">
                  Google Pay
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
    </MainLayout>
  );
};

export default Cart;
