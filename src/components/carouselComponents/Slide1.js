import React, { useEffect, useState } from "react";
import { CardComponents } from "../card/CardComponents";
import { useSelector } from "react-redux";

export const Slide1 = ({ abc = [] }) => {
  const { products } = useSelector((state) => state.product);
  // console.log(products);

  const getRandomProducts = () => {
    const randomProducts = [];
    while (randomProducts.length < 3) {
      const randomObject =
        products[Math.floor(Math.random() * products.length)];
      if (!randomProducts.includes(randomObject?._id)) {
        randomProducts.push(randomObject?._id);
        // console.log("R", randomProducts);
      }
    }
    const newArray = products.filter((obj) =>
      randomProducts.includes(obj?._id)
    );
    console.log("p", newArray);
    return newArray;
  };
  const randomProductsList = getRandomProducts();
  console.log(randomProductsList);

  return (
    <div className="d-flex justify-content-center align-items-center gap-5">
      {
        // randomProducts.length > 0 &&
        // abc?.map((item, i) => (
        abc?.map((item, i) => (
          <CardComponents key={i} {...item} />
        ))
      }
    </div>
  );
};
