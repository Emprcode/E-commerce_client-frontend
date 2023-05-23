import React, { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container} from "react-bootstrap";
// import top from "../assets/top.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../components/redux/products-redux/productAction";
import { MensTopCard } from "../components/card/MensTopCard";

const MenTops = () => {

  const {  products } = useSelector((state) => state.product)
console.log(products)

const dispatch = useDispatch()

useEffect(()=> {
dispatch(getAllProductsAction())
}, [dispatch])

const mensTopID = "644252d06d1c2671ce08a25b"

const filteredArray = products.filter((item)=>item.parentCat === mensTopID )
console.log(filteredArray)

 
  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> MEN'S TOP</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
          {filteredArray.map((item, i) => (
            <MensTopCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default MenTops;
