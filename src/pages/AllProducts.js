import React, { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../components/redux/product/productAction";
import { getAllCategoriesAction } from "../components/redux/category/categoryAction";
import { CardComponents } from "../components/card/CardComponents";
import InputGroup from "react-bootstrap/InputGroup";
import { Pagination, PaginationItem } from "@mui/material";

const AllProducts = () => {
  const { products } = useSelector((state) => state.product);
  const { cats } = useSelector((state) => state.category);

  const getRandomProducts = (array, count) => {
    const arrayCopy = [...array];
    // Shuffle array (Fisher-Yates shuffle algorithm)
    const shuffledProducts = arrayCopy.sort(() => Math.random() - 0.5);
    // Get sub-array of first `count` elements after shuffle
    return shuffledProducts.slice(0, count);
  };
  const randomProducts = getRandomProducts(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAction());
    dispatch(getAllCategoriesAction());
  }, [dispatch]);

  const [listProduct, SetListProduct] = useState(randomProducts);
  const [search, setSearch] = useState("");

  //filter function
  const handleOnFilter = (value) => {
    value === "all"
      ? SetListProduct(products)
      : SetListProduct(products.filter((item) => item.parentCat === value));
  };

  const filteredSearchProducts = listProduct.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  //pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 7;

  // Calculate the index range of the products to display for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredSearchProducts.slice(startIndex, endIndex);

  useEffect(() => {
    setPage(1);
  }, [search, listProduct]);

  // Function to handle page change
  const handlePageChange = (e, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MainLayout>
      <Container>
        <div>
          <h2 className="p-5 text-center fw-bold"> SHOP ALL FOOTBALL KITS</h2>
        </div>
        <div className="p-2 d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <div className="d-grid">
            <select
              className="p-2 rounded"
              onChange={(e) => handleOnFilter(e.target.value)}
            >
              <option value="all"> All Kits</option>
              {cats.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-7">
            <Form>
              <InputGroup className="my-3">
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products"
                />
              </InputGroup>
            </Form>
          </div>
        </div>

        <div className=" p-4 d-flex justify-content-center align-items-center gap-5 flex-wrap">
          {/* {filteredSearchProducts?.map((item, i) => ( */}
          {currentProducts?.map((item, i) => (
            <CardComponents key={i} {...item} />
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Pagination
            count={Math.ceil(filteredSearchProducts.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            color="secondary"
            renderItem={(item) => (
              <PaginationItem
                {...item}
                component="div"
                sx={{ cursor: "pointer" }}
              />
            )}
          />
        </div>
      </Container>
    </MainLayout>
  );
};

export default AllProducts;
