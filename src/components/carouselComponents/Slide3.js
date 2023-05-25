import React, { useEffect, useState } from 'react'
import shoes from "../../assets/shoes.png"
import { CardComponents } from "../card/CardComponents";
import { useSelector } from 'react-redux';

export const Slide3 = ({abc=[]}) => {
  const { products } = useSelector((state) => state.product);
  console.log(products);

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
    // const products = [
    //     {
    //       title: "shoes",
    //       img: shoes,
    //       price: "$200",
    //     },
    //     {
    //       title: "shoes",
    //       img: shoes,
    //       price: "$200",
    //     },
    //     // {
    //     //   title: "shoes",
    //     //   img: shoes,
    //     //   price: "$200",
    //     // },
    //     // {
    //     //   title: "shoes",
    //     //   img: shoes,
    //     //   price: "$200",
    //     // },
    //   ];
    
  return (
    <div className='d-flex justify-content-center align-items-center gap-5'>
        
        
          {randomProductsList.map((item, i) => (
            <CardComponents key={i} {...item} />
          ))}
     




    </div>
  )
}
