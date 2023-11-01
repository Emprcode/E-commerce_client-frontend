import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ProductCard } from '../card/ProductCard';

export const Slide3 = ({abc=[]}) => {
  const { products } = useSelector((state) => state.product);

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
            <ProductCard key={i} {...item} />
          ))}





    </div>
  )
}
