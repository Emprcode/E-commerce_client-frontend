import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/card/ProductCard";

const MenBottoms = ({MenBottoms=[]}) => {
  const {products} = useSelector((state)=> state.product)
  console.log(products)

  const mensBottomId = "64aa3a5e98e70af4e51fee75"

  const filteredArray = products.filter((item)=> item.parentCat === mensBottomId)
  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> MEN'S BOTTOMS</h2>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
          {filteredArray.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default MenBottoms;
