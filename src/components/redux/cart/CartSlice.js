import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const { payload } = action;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );

      if (existingItemIndex !== -1) {
        state.cartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, shopQty: item.shopQty + 1 }
            : item
        );
        toast.info("Increased product quantity", { position: "top-right" });
      } else {
        const newCartItem = { ...payload, shopQty: 1 };
        state.cartItems.push(newCartItem);
        toast.success("Product added to cart", { position: "top-right" });
      }

      // Update localStorage after state mutation
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].shopQty > 1) {
        state.cartItems[itemIndex].shopQty -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].shopQty === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeOneItemFromCart(state, action) {
      const { _id } = action.payload;

      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== _id
      );

      state.cartItems = updatedCartItems;

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      toast.error("Product removed from cart", { position: "bottom-left" });
    },

    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const {
  setCart,
  decreaseCart,
  removeOneItemFromCart,
  getTotals,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
