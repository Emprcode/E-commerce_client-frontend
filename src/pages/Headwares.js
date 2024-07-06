import React, { useEffect } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/card/ProductCard";
import { getAllProductsAction } from "../components/redux/products-redux/productAction";
import { getAllCategoriesAction } from "../components/redux/category/categoryAction";

const Headwares = () => {
  const { products } = useSelector((state) => state.product);
  const { cats } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAction());
    dispatch(getAllCategoriesAction());
  }, [dispatch]);

  const mensHeadwares = cats?.find(
    (item) => item.slug === process.env.REACT_APP_MENS_HEADWARES_SLUG
  );

  const filteredArray = products?.filter(
    (item) => item?.parentCat === mensHeadwares?._id
  );
  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> MEN'S HEADWEARS</h2>
        </div>

        <div className=" p-4 d-flex justify-content-center align-items-center gap-5 flex-wrap">
          {filteredArray.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default Headwares;
