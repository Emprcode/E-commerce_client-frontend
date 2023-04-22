import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./components/products/productSlice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

export default store;
