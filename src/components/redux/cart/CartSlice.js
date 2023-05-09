import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
  
};

const productSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    requestPending: (state, action) => {
      state.isLoading = true;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
      state.isLoading = false;
    },
    
  },
});

const { reducer, actions } = productSlice;

export const { requestPending, setCart} = actions;

export default reducer;
