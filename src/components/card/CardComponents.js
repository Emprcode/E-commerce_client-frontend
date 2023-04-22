import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const CardComponents = ({ img, price, description, ...item }) => {
  const navigate = useNavigate();

  const lunchProductCard = (e) => {
    // e.preventDefault();
    navigate("/product");
  };
  return (
    <Card
      style={{ width: "18rem" }}
      className="cardcss border-0"
      onClick={lunchProductCard}>
      <Card.Img variant="top" src={img} height="340px" />
      <Card.Body>
        <Card.Title className="text-center fw-bold">{item.name}</Card.Title>
        <Card.Text className="text-center">
          <p> {price} </p>
          <p>{description}</p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};
