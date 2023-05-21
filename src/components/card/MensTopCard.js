import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MensTopCard = ({
  img,
  price,
  name,
  slug,
  description,
  _id,
  ...item
}) => {
  return (
    <div>
      <Link to={"/products/" + slug} className="nav-link">
        <Card style={{ width: "18rem" }} className="cardcss border-0">
          <Card.Img
            variant="top"
            className="rounded"
            src={"http://localhost:8000/" + item?.thumbnail.substr(6)}
            height="340px"
          />
          <Card.Body>
            <Card.Title className="text-center m-3">{name}</Card.Title>
            <Card.Text className="text-center">
              <p className="fw-bold"> {price} </p>
              <p>{description}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
