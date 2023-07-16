import React, { useEffect } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../components/redux/products-redux/productAction";
import { ProductCard } from "../components/card/ProductCard";

const MenTops = () => {

  const {  products } = useSelector((state) => state.product)
// console.log(products)

const dispatch = useDispatch()

useEffect(()=> {
dispatch(getAllProductsAction())
}, [dispatch])

const mensTopID = "64aa3a5798e70af4e51fee6b"

const filteredArray = products.filter((item)=>item.parentCat === mensTopID )
// console.log(filteredArray)

 
  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> MEN'S TOP</h2>
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

export default MenTops;
