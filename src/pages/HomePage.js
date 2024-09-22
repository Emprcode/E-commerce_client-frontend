import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Membership } from "../components/page-components/Membership";
import { ShopHere } from "../components/page-components/ShopHere";
import { MainLayout } from "../layout/MainLayout";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "../components/redux/product/productAction";
import { LatestArrival } from "../components/swiperComponents/LatestArrival";
import { getAllCategoriesAction } from "../components/redux/category/categoryAction";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
    dispatch(getAllCategoriesAction());
  }, [dispatch]);
  return (
    <MainLayout>
      <div className="hero1 p-3">
        <div className="d-flex flex-column gap-2 justify-content-center align-items-center content">
          <h1 className="fw-bold ">Gear Up, Game On!</h1>

          <h5 className="mt-3">Wear the Game & Live the Dream</h5>
          <Button
            variant="dark"
            href="#shopnow"
            className="rounded fw-bold  mb-5"
          >
            Shop Now!
          </Button>
        </div>
      </div>

      {/* <Carousel>
        <Carousel.Item>
          <div className="hero1">
            <div className="mt-5 pt-4 d-flex flex-column gap-2 justify-content-center align-items-center">
              <h1 className="mt-5 hero-title fw-bold ">
                Unleash your inner Rebel
              </h1>

              <h5 className="mt-2 mb-5">
                All latest streetware stuff available here.
              </h5>
              <Button
                variant="dark"
                href="#shopnow"
                className="rounded fw-bold"
              >
                Shop Now!
              </Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero3">
            <div className="mt-5 d-flex flex-column gap-2 justify-content-center align-items-center">
              <h1 className="fw-bold text-center">
                Level up your street style with our newest arrivals.
              </h1>

              <h5 className="mt-2 mb-5 text-center">
                Embrace the latest in urban fashion, available now.
              </h5>
              <Button
                variant="dark"
                href="#shopnow"
                className="rounded fw-bold"
              >
                Shop Now!
              </Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero2">
            <div className="mt-5 d-flex flex-column gap-2 justify-content-center align-items-center">
              <h1 className="fw-bold text-center">
                Own your streets with our cutting-edge streetwear
              </h1>

              <h5 className="mt-2 mb-5 text-center">
                Explore the world of streetwise fashion with our exclusive
                collection
              </h5>
              <Button
                variant="dark"
                href="#shopnow"
                className="rounded fw-bold"
              >
                Shop Now!
              </Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel> */}
      <br />
      <ShopHere />
      <LatestArrival />
      <Membership />
    </MainLayout>
  );
};

export default HomePage;
