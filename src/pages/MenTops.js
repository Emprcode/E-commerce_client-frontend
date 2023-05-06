import React, { useEffect } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container} from "react-bootstrap";
// import top from "../assets/top.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../components/products-redux/productAction";
import { MensTopCard } from "../components/card/MensTopCard";

const MenTops = () => {

  const {  products } = useSelector((state) => state.product)
console.log(products)

const dispatch = useDispatch()

useEffect(()=> {
dispatch(getAllProductsAction())

}, [dispatch])

  // const MenTops = [
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  //   {
  //     img: top,
  //     title: "Nike Air Max T-shirt",
  //     price: "$60",
  //   },
  // ];
  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> MEN'S TOP</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
          {products.map((item, i) => (
            <MensTopCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default MenTops;
