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
  ...item
}) => {
  return (
    <div>
      <Link to={"/products/" + slug} className="nav-link">
        <Card style={{ width: "18rem" }} className="cardcss border-0">
          <Card.Img
            variant="top"
            className="rounded"
            src={process.env.REACT_APP_IMAGE_API + item?.thumbnail?.substr(6)}
            height="340px"
          />
          <Card.Body>
            <Card.Title className="text-center m-3">{name}</Card.Title>
            <Card.Text className="text-center">
              <div className="fw-bold"> {price} </div>
              {/* <div>{description}</div> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
