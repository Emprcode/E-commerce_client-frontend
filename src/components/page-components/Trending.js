import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Slide1 } from "../carouselComponents/Slide1";
import { Slide2 } from "../carouselComponents/Slide2";
import { Slide3 } from "../carouselComponents/Slide3";

export const Trending = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <h2 className=" p-5 text-center fw-bold">Trending</h2>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="p-3">
        <Carousel.Item>
          <Slide1 />
        </Carousel.Item>
        <Carousel.Item>
          <Slide2 />
        </Carousel.Item>
        <Carousel.Item>
          <Slide3 />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
