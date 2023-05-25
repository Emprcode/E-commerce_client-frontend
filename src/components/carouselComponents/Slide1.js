import React, { useEffect, useState } from "react";
import { CardComponents } from "../card/CardComponents";
import { useSelector } from "react-redux";

export const Slide1 = ({ abc = [] }) => {
  const { products } = useSelector((state) => state.product);
  console.log(products);
  const [randomProducts, setRandomProducts] = useState([]);

  const generateRandomProducts = () => {
    const randomIndices = [];
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    const randomProducts = randomIndices.map((index) => products[index]);
    setRandomProducts(randomProducts);
  };

  useEffect(() => {
    generateRandomProducts();
  }, []);
  console.log(randomProducts);
  return (
    <div className="d-flex justify-content-center align-items-center gap-5">
      {
        // randomProducts.length > 0 &&
        randomProducts.map((item, i) => (
          <CardComponents key={i} {...item} />
        ))
      }
    </div>
  );
};
