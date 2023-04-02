import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container } from "react-bootstrap";
import { CardComponents } from "../components/card/CardComponents";
import shoes from "../assets/shoes.png";

const MenFootwares = () => {
  const MenFootwares = [
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
    {
      img: shoes,
      title: "Jordan Air 1 High ",
      price: "$350",
    },
  ];

  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> MEN'S FOOTWEAR</h2>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
          {MenFootwares.map((item, i) => (
            <CardComponents key={i} {...item} />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default MenFootwares;
