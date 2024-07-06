import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    unSetUser: (state) => {
      state.user = {};
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser, unSetUser } = actions;

export default reducer;
