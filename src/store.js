import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./components/redux/product/productSlice";
import cartReducer from "./components/redux/cart/CartSlice";
import CategoryReducer from "./components/redux/category/categorySlice";
import UserReducer from "./components/redux/user/UserSlice";
import OrderReducer from "./components/redux/order/orderSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: CategoryReducer,
    selectedProduct: productReducer,
    cartItems: cartReducer,
    user: UserReducer,
    orders: OrderReducer,
  },
});

export default store;
