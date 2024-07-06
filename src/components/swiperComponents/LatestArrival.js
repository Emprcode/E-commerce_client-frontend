import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CardComponents } from "../card/CardComponents";

export const LatestArrival = () => {
  const { products } = useSelector((state) => state.product);

  const getRandomProducts = (array, count) => {
    const arrayCopy = [...array];
    // Shuffle array (Fisher-Yates shuffle algorithm)
    const shuffledProducts = arrayCopy.sort(() => Math.random() - 0.5);
    // Get sub-array of first `count` elements after shuffle
    return shuffledProducts.slice(0, count);
  };
  const randomProducts = getRandomProducts(products, 8);
  // console.log(randomProducts);
  return (
    <Container>
      <div>
        <h2 className="p-3 text-center fw-bold"> LATEST ARRIVALS</h2>
      </div>
      <hr />
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is <= 992px (tablet)
          992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // when window width is <= 1200px (small desktop)
          1200: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
        }}
      >
        {randomProducts.map((product, i) => (
          <SwiperSlide
            className="d-flex justify-content-center align-items-center"
            key={i}
          >
            {" "}
            <CardComponents key={i} {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
