import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/card/ProductCard";

const MenFootwares = () => {
  const {products} = useSelector(state=> state.product)
  console.log(products)

  const mensFootwareID = "64aa3a6498e70af4e51fee7c"

  const filteredArray = products.filter((item)=> item.parentCat === mensFootwareID)

  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> MEN'S FOOTWEAR</h2>
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

export default MenFootwares;
