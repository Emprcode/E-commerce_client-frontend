import React, { useEffect } from "react";
import { MainLayout } from "../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Card, Container, Table } from "react-bootstrap";
import { logoutUserProfile } from "../components/redux/user/UserAction";
import { getOrdersAction } from "../components/redux/order/orderAction";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.orders);

  const { name, email, avatar } = user;

  const dispatch = useDispatch();

  const handleOnLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logoutUserProfile());
    }
  };
  // const [updateUser, setUpdateUser] = useState(user);

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdateUser({
  //     ...updateUser,
  //     [name]: value,
  //   });
  // };

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch(updateUserAction(updateUser));
  // };

  useEffect(() => {
    dispatch(getOrdersAction());
  }, [dispatch]);

  return (
    <MainLayout>
      <Container className="p-4">
        <div className="p-4 d-flex justify-content-center align-items-center">
          <Card style={{ width: "18rem" }} className="border-0 text-center">
            <Card.Img
              variant="none"
              className="p-2 rounded mx-auto"
              src={avatar}
              width="30%"
              height="40%"
            />
            <Card.Body className="">
              <Card.Title>{name}</Card.Title>
              <Card.Text>{email}</Card.Text>

              <Button
                variant="info"
                className="fw-bold rounded-pill"
                onClick={() => handleOnLogout()}
              >
                Logout
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* <div>
          <Row className=" p-4 d-flex justify-content-center align-items-center">
            <h4 className="fw-bold text-center">
              Update your delivery address
            </h4>

            <Col className="col-md-5 ">
              <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    name="address"
                    type="text"
                    onChange={handleOnChange}
                    defaultValue={user.address}
                    placeholder="1 Martin Place, Sydney NSW 2000"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    name="phone"
                    type="number"
                    onChange={handleOnChange}
                    defaultValue={user.phone}
                    placeholder="0456768688"
                  />
                </Form.Group>
                <Button
                  variant="info"
                  type="submit"
                  className="rounded-pill px-5"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div> */}
        {orders && (
          <div className="p-2 mt-4">
            <h4 className="fw-bold m-3"> Your Order</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Delivery Status</th>
                </tr>
              </thead>
              <tbody>
                {orders?.products?.map((item, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>$ {item.price}.00</td>
                    <td className="h5">
                      <Badge pill bg="warning" text="dark">
                        {orders.delivery_status}
                      </Badge>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td></td>
                  <td colSpan={3}>Total</td>
                  <td>${orders.total / 100}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </MainLayout>
  );
};

export default Profile;
