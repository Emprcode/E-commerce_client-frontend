import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import shoes from "../../assets/shoes.png";
import { CardComponents } from "../card/CardComponents";

export const Tranding = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const products = [
    {
      title: "shoes",
      img: shoes,
      price: "$200",
    },
    {
      title: "shoes",
      img: shoes,
      price: "$200",
    },
    {
      title: "shoes",
      img: shoes,
      price: "$200",
    },
    {
      title: "shoes",
      img: shoes,
      price: "$200",
    },
  ];

  return (
    <div>
      <h3 className=" p-5 text-center fw-bold">Trending</h3>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="bg-warning">
        {/* {products?.length &&
          products.map((prod) => (
            <Carousel.Item key={prod.id}>
              <CardComponents product={prod} />
            </Carousel.Item>
          ))} */}

        <Carousel.Item>
          {products.map((item, i) => (
            <CardComponents key={i} {...item} />
          ))}
        </Carousel.Item>
        {/* <Carousel.Item>2</Carousel.Item>
        <Carousel.Item>3</Carousel.Item>
        <Carousel.Item>
          <CardComponents />
        </Carousel.Item> */}

        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};
