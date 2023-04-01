import React, { useState } from "react";
import { Container } from "react-bootstrap";

export const Sale = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <div className="title">
        <span>
          {" "}
          <h2 className=" p-5 text-center fw-bold text-danger ">Sale</h2>
        </span>
      </div>
    </Container>
  );
};
