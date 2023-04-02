import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container } from "react-bootstrap";
import { CardComponents } from "../components/card/CardComponents";
import bottom from "../assets/bottom.png";

const MenBottoms = () => {
  const MenBottoms = [
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
    {
      img: bottom,
      title: "Jordan Originals Track Pants",
      price: "$200",
    },
  ];
  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> MEN'S BOTTOMS</h2>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
          {MenBottoms.map((item, i) => (
            <CardComponents key={i} {...item} />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default MenBottoms;
