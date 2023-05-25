import React, { useEffect, useState } from "react";
import { CardComponents } from "../card/CardComponents";
import { useSelector } from "react-redux";

export const Slide1 = ({ abc = [] }) => {
  const { products } = useSelector((state) => state.product);
  console.log(products);
  // const [randomProducts, setRandomProducts] = useState([]);

  // const generateRandomProducts = () => {
  //   const randomIndices = [];
  //   while (randomIndices.length < 3) {
  //     const randomIndex = Math.floor(Math.random() * products.length);
  //     if (!randomIndices.includes(randomIndex)) {
  //       randomIndices.push(randomIndex);
  //     }
  //   }

  //   const randomProducts = randomIndices.map((index) => products[index]);
  //   setRandomProducts(randomProducts);
  // };

  // useEffect(() => {
  //   generateRandomProducts();
  // }, []);
  // console.log(randomProducts);

  const getRandomProducts = () => {
    const randomProducts = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (!randomProducts.includes(randomIndex)) {
        randomProducts.push(products[randomIndex]);
      }
    }
    return randomProducts;
  };
  const randomProductsList = getRandomProducts();
  console.log(randomProductsList);

  return (
    <div className="d-flex justify-content-center align-items-center gap-5">
      {
        // randomProducts.length > 0 &&
        randomProductsList.map((item, i) => (
          <CardComponents key={i} {...item} />
        ))
      }
    </div>
  );
};
