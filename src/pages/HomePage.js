import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Membership } from "../components/page-components/Membership";
import { ShopHere } from "../components/page-components/ShopHere";
import { MainLayout } from "../layout/MainLayout";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "../components/redux/products-redux/productAction";
import { getAllCategoriesAction } from "../components/redux/category/categoryAction";
import { LatestArrival } from "../components/swiperComponents/LatestArrival";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
    dispatch(getAllCategoriesAction());
  }, [dispatch]);
  return (
    <MainLayout>
      <div className="hero">
        <div className="mt-5 d-flex flex-column gap-2 justify-content-center align-items-center">
          <h1 className="fw-bold ">Unleash your inner rebel</h1>

          <h5 className="mt-4 mb-5">
            All latest streetware stuff available here.
          </h5>
          <Button variant="dark" href="#shopnow" className="rounded fw-bold">
            Shop Now!
          </Button>
        </div>
      </div>
      <ShopHere />
      <LatestArrival />
      <Membership />
    </MainLayout>
  );
};

export default HomePage;
