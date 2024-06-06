import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductCard = ({
  img,
  price,
  name,
  slug,
  description,
  _id,
  thumbnail,
  ...item
}) => {
  return (
    <div>
      <Link to={"/products/" + slug} className="nav-link">
        <Card
          style={{ width: "18rem", heigth: "25rem" }}
          className="cardcss border-0"
        >
          <Card.Img
            variant="top"
            className="rounded cardimg"
            src={thumbnail}
            height="350px"
          />
          <Card.Body>
            <Card.Title className="text-center m-3">{name}</Card.Title>
            <Card.Text className="text-center fw-bold">${price}.00</Card.Text>
            {/* <div>{description}</div> */}
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
