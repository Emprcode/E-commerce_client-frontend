import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container, Row } from "react-bootstrap";
import { CardComponents } from "../components/card/CardComponents";
import top from "../assets/top.png";

const MenTops = () => {
  const MenTops = [
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
    {
      img: top,
      title: "Nike Air Max T-shirt",
      price: "$60",
    },
  ];
  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> MEN'S TOP</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
          {MenTops.map((item, i) => (
            <CardComponents key={i} {...item} />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default MenTops;
