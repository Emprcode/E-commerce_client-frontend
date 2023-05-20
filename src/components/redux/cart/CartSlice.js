import { createSlice } from "@reduxjs/toolkit";

let initialCart = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const initialState = {
  cart: initialCart,
  isLoading: false,

  
};

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    requestPending: (state, action) => {
      state.isLoading = true;
    },
    setCart: (state, action) => {
      const temArg = state.cart.filter((item)=> (item._id !== action.payload._id))

       state.cart =[...temArg, action.payload]
      state.isLoading = false;
    },
   
   setRemoveFromCart: (state, { payload }) => {
       // remove the product with the given id from the cart
       const updatedCart = state.cart.filter(item => item?._id !== payload);
       state.cart = updatedCart;
   },
   setUpdateCart: (state, { payload }) => {
       const { id, name, value } = payload;
       const itemIndex = state.cart.findIndex((item) => item._id === id);
       if (itemIndex !== -1) {
           state.cart[itemIndex][name] = value;
       }
   },
    
  },
});

const { reducer, actions } = productSlice;

export const { requestPending, setCart, setRemoveFromCart, setUpdateCart} = actions;

export default reducer;
