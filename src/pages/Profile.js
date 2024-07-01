import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { username, email, avatar } = user;
  console.log(avatar);
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
              <Card.Title>{username}</Card.Title>
              <Card.Text>{email}</Card.Text>

              <Button variant="info" className="fw-bold rounded-pill">
                Logout
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Profile;
