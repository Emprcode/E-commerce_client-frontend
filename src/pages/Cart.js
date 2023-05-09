import React, { useEffect } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../components/redux/cart/CartSlice";

const Cart = () => {

  const dispatch = useDispatch()
  const { selectedProduct } = useSelector((state) => state.selectedProduct);
  console.log(selectedProduct);

  const {cart} = useSelector(state => state.cartItems)
console.log(cart)

  useEffect(() => {
    dispatch(setCart(selectedProduct))
  }, [dispatch, selectedProduct, cart]);


 
  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-3 fw-bold">YOUR CART </h2>
          <hr />
        </div>
        {
          cart.length !== 0 ?  
           <Row>
          <Col className="p-4 d-flex justify-content-center align-items-center flex-column">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
         {
          selectedProduct.map((item, i)=>  <tr key={i}>
          <td>{i+ 1}</td>
          <td>{item.thumbnail}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.qty}</td>
        </tr>)
        } 
       
      
      </tbody>
    </Table>
    </Col>
          <Col>
            <h4 className="fw-bold">SUMMARY</h4>
            <hr />
            <div className="d-flex justify-content-center align-items-center h5 p-4">
              <p className="col-9 fw-bold"> Total</p>
              <p> 0.000</p>
            </div>

            <div className="d-grid gap-3">
              <Button variant="success" className="fw-bold cartbtn">
                Proceed to checkout
              </Button>
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
        :   <Row className="p-4 d-flex justify-content-center align-items-center flex-column">
          
        <p className="fw-bold">Your cart is empty.</p>
        <a href="/">
          {" "}
          <Button variant="info" className="fw-bold text-light">
            Start Shopping
          </Button>
        </a>
     
      
    </Row>
   
        }
       
      </Container>
    </MainLayout>
  );
};

export default Cart;
