import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const MensTopCard = ({ img, price, description, _id, ...item }) => {
  const navigate = useNavigate();

  const lunchProductCard = (e) => {
    // e.preventDefault();
    navigate("/product/" + _id);
  };
  return (
    <Card style={{ width: "18rem" }} className="cardcss border-0">
      <Card.Img
        variant="top"
        className="rounded"
        src={"http://localhost:8000/" + item?.thumbnail.substr(6)}
        height="340px"
        onClick={lunchProductCard}
      />
      <Card.Body>
        <div className="d-flex justify-content-center gap-3">
          <img
            src={"http://localhost:8000/" + item?.images[0].substr(6)}
            width="50px"
            height="50px"
            alt="product"
          />
          {/* </div>
        <div> */}
          {/* <img
            src={"http://localhost:8000/" + item?.images[1].substr(6)}
            width="50px"
            height="50px"
          /> */}
        </div>
        <Card.Title className="text-center m-3">{item.name}</Card.Title>
        <Card.Text className="text-center">
          <p className="fw-bold"> {price} </p>
          <p>{description}</p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};
