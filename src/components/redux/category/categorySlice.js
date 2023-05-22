import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  isLoading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    requestPending: (state, action) => {
      state.isLoading = true;
    },
    setCats: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
   
  },
});

const { reducer, actions } = categorySlice;

export const { requestPending, setCats } = actions;

export default reducer;
