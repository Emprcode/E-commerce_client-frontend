import React from 'react'
import { CardComponents } from "../card/CardComponents";
import { useSelector } from 'react-redux';
import { ProductCard } from '../card/ProductCard';

export const Slide1 = ({abc=[]}) => {

  const {products} = useSelector(state => state.product)
  console.log(products)

  const randomProducts = [];

  // // Generate three random indices
  while (randomProducts.length < 3) {
    const randomIndex = Math.floor(Math.random() * products.length);
    const randomProduct = products[randomIndex];

  //   // Check if the product is already in the randomProducts array
    if (!randomProducts.includes(randomProduct)) {
      randomProducts.push(randomProduct);
    }
  }
  
  console.log(randomProducts)
    // const products = [
    //     {
    //       title: "Air Jordan 1 High",
    //       img: shoes,
    //       price: "$200",
    //     },
    //     {
    //       title: "shoes",
    //       img: shoes,
    //       price: "$200",
    //     },
    //     {
    //       title: "shoes",
    //       img: top,
    //       price: "$200",
    //     },
    //     {
    //       title: "shoes",
    //       img: shoes,
    //       price: "$200",
    //     },
    //   ];
    
  return (
    <div className='d-flex justify-content-center align-items-center gap-3'>
   
          {randomProducts.map((item, i) => (
            <CardComponents key={i} {...item} />
          ))}
     




    </div>
  )
}
