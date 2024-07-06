import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeOneItemFromCart,
  decreaseCart,
  setCart,
} from "../components/redux/cart/CartSlice";
import { checkoutSession } from "../components/helper/axiosHelper";
import { LatestArrival } from "../components/swiperComponents/LatestArrival";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const price = cartItems?.reduce((acc, itemPrice) => {
    return acc + parseInt(itemPrice?.shopQty * itemPrice?.price);
  }, 0);

  const totalQuantity = cartItems?.reduce((total, currentItem) => {
    return total + currentItem.shopQty;
  }, 0);

  const handleAddToCart = (product) => {
    dispatch(setCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    if (window.confirm(`Are you sure you want to remove ${product.name}?`)) {
      console.log(product);
      dispatch(removeOneItemFromCart(product));
    }
  };
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
        <div className="mt-4 ">
          <h2 className=" p-4 fw-bold">YOUR CART </h2>
        </div>

        {cartItems?.length !== 0 ? (
          <div className="cart-container">
            <div className="titles">
              <h3 className="product-title">
                Product <span className="fw-bold h6">({totalQuantity})</span>
              </h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cartItems &&
                cartItems.map((cartItem) => (
                  <div className="cart-item" key={cartItem._id}>
                    <div className="cart-product">
                      <img src={cartItem.thumbnail} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <p>{cartItem.desc}</p>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">${cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.shopQty}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      ${cartItem.price * cartItem.shopQty}
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => clearCartHandler()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${price}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button onClick={handleOnSubmit}>Check out</button>
                <div className="continue-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
