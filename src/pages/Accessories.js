import React, { useEffect } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../components/redux/product/productAction";
import { getAllCategoriesAction } from "../components/redux/category/categoryAction";
import { ShoeCard } from "../components/card/ShoeCard";

const Accessories = () => {
  const { products } = useSelector((state) => state.product);
  const { cats } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAction());
    dispatch(getAllCategoriesAction());
  }, [dispatch]);

  const mensAccessories = cats?.find(
    (item) => item.slug === process.env.REACT_APP_MENS_ACCESSORIES_SLUG
  );

  const filteredArray = products?.filter(
    (item) => item?.parentCat === mensAccessories?._id
  );
  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> MEN'S ACCESSORIES</h2>
        </div>

        <div className=" p-4 d-flex justify-content-center align-items-center gap-5 flex-wrap">
          {filteredArray.map((item, i) => (
            <ShoeCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default Accessories;
