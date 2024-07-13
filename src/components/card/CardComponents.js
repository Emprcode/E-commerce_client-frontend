import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardComponents = ({ price, name, slug, thumbnail }) => {
  return (
    <div>
      <Link to={"/products/" + slug} className="nav-link">
        <Card className="border-0" style={{ maxWidth: "250px" }}>
          <span style={{ width: "250px", height: "250px" }}>
            <Card.Img
              variant="top"
              className="rounded"
              src={thumbnail}
              style={{
                width: "100%",
                height: "90%",
                objectFit: "cover",
              }}
            />
          </span>
          <Card.Body>
            <Card.Title className="text-center h6 fw-bold">{name}</Card.Title>
            <Card.Text className="text-center">
              <span className="p">${price}.00 </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
