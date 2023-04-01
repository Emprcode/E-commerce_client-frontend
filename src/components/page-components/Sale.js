import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Slide1 } from "../carouselComponents/Slide1";
import { Slide2 } from "../carouselComponents/Slide2";
import { Slide3 } from "../carouselComponents/Slide3";

export const Sale = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <span className="spanline" />
      <h2 className=" p-5 text-center fw-bold text-danger ">Sale</h2>
      <span></span>
    </Container>
  );
};
