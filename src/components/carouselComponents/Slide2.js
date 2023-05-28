import React, { useEffect, useState } from 'react'
import shoes from "../../assets/shoes.png";
import { CardComponents } from "../card/CardComponents";
import { useSelector } from 'react-redux';

export const Slide2 = ({abc=[]}) => {
  const { products } = useSelector((state) => state.product);
  // console.log(products);

  


  // const getRandomProducts = () => {
  //   const randomProducts = [];
  //   while (randomProducts.length < 3) {
  //     const randomObject = products[Math.floor(Math.random() * products.length)];
  //     if (!randomProducts.includes(randomObject?._id)) {
  //       randomProducts.push(randomObject?._id);
  //     }
  //   }
  //   const newArray = products.filter(obj => randomProducts.includes(obj?._id));
  //   return newArray
  // };
  // const randomProductsList = getRandomProducts();

 
  

  return (
    <div className='d-flex justify-content-center align-items-center gap-5'>
        
        
          {abc?.map((item, i) => (
            <CardComponents key={i} {...item} />
          ))}
     




    </div>
  )
}
