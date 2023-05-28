import React, { useEffect, useState } from 'react'
import shoes from "../../assets/shoes.png";
import { CardComponents } from "../card/CardComponents";
import { useSelector } from 'react-redux';

export const Slide2 = ({abc=[]}) => {
  const { products } = useSelector((state) => state.product);
  // console.log(products);

  


  const [randomP, setRandomP] = useState([])
  // console.log(products);

useEffect(()=> {
  getRandomProducts()

}, [products])


const getRandomProducts = () => {
  const randomProducts = []
  while (randomProducts.length < 3) {
    const selectedP = products[Math.floor(Math.random() * products.length)]

    const isExist = randomProducts.find(p => p?._id === selectedP?._id)
     
      !isExist && randomProducts.push(selectedP );
  }
  setRandomP(randomProducts)
}
 
  

  return (
    <div className='d-flex justify-content-center align-items-center gap-5'>
        
        
          {randomP?.map((item, i) => (
            <CardComponents key={i} {...item} />
          ))}
     




    </div>
  )
}
