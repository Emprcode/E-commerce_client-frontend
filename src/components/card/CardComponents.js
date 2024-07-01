import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardComponents = ({
  images,
  price,
  name,
  slug,
  description,
  thumbnail,
  _id,

  ...item
}) => {
  return (
    <div>
      <Link to={"/products/" + slug} className="nav-link">
        <Card className="border-0" style={{ maxWidth: "250px" }}>
          <div style={{ width: "250px", height: "250px" }}>
            <Card.Img
              variant="top"
              className="rounded"
              src={thumbnail}
              style={{ width: "100%", height: "90%", objectFit: "cover" }}
            />
          </div>
          <Card.Body>
            <Card.Title className="text-center h6 fw-bold">{name}</Card.Title>
            <Card.Text className="text-center">
              <p className="">${price}.00 </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
