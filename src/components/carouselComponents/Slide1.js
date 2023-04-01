import React from 'react'
import shoes from "../../assets/shoes.png";
import top from "../../assets/top.png";
import { CardComponents } from "../card/CardComponents";

export const Slide1 = () => {
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
          img: top,
          price: "$200",
        },
        {
          title: "shoes",
          img: shoes,
          price: "$200",
        },
      ];
    
  return (
    <div className='d-flex justify-content-center align-items-center gap-3'>
        
        
          {products.map((item, i) => (
            <CardComponents key={i} {...item} />
          ))}
     




    </div>
  )
}
