import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./components/redux/products-redux/productSlice";
import cartReducer from "./components/redux/cart/CartSlice";
import CategoryReducer from "./components/redux/category/categorySlice";

const store = configureStore({
  reducer: {
    product : productReducer,
    category : CategoryReducer,
    selectedProduct : productReducer,
    cartItems: cartReducer
     
  },
});

export default store;

