import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// let initialCart= localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const initialCart = JSON.parse(localStorage.getItem("cartItems"))?.cart
  ? JSON.parse(localStorage.getItem("cartItems")).cartItems
  : []

  const stateTotalAmount = JSON.parse(localStorage.getItem("cartItems"))
  ?.totalAmount
  ? JSON.parse(localStorage.getItem("cartState")).totalAmount
  : 0

const stateTotalQuantity = JSON.parse(localStorage.getItem("cartItems"))
  ?.totalQuantity
  ? JSON.parse(localStorage.getItem("cartState")).totalQuantity
  : 0

const initialState = {
  cart: initialCart,
  // isLoading: false,

  
};

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  

    setCart: (state, action) => {
      const itemIndex = state.cart.findIndex((item)=> item._id === action.payload._id)
   
if(itemIndex >= 0){
  state.cart[itemIndex].shopQty += 1
  toast.info(`Increased ${action.payload.name} cart quantity!`)} 
  else{
    const productInCart = {...action.payload}
    state.cart.push(productInCart)
    toast.success(`${action.payload.name} has been added to cart`)
    localStorage.setItem("cartItems", JSON.stringify(state.cart))
  }
      
    },


   
    removeProductFromCart: (state, { payload }) => {
      const updateCartItems = state.cart.filter(
        (item) => item._id !== payload._id
      )

      state.cart = updateCartItems
      if(window.confirm(`Are you sure you want to remove this item?`)){
      localStorage.setItem("cartItems", JSON.stringify(state.cart))
      toast.error(`${payload.name} has been removed to cart!`, {
        position: "bottom-left",
      })}
    },

    //calculate total items
   
    
  },
});

const { reducer, actions } = productSlice;

export const { requestPending, setCart, removeProductFromCart, setUpdateCart} = actions;

export default reducer;

