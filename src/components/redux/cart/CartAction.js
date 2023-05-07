import { toast } from "react-toastify"
import { addToCart, getCart } from "../../helper/axiosHelper"
import { setCart } from "./CartSlice"

export const addToCartAction = (obj) => async(dispatch) => {
    const {status, message} = await addToCart(obj)
    console.log(  status, message)
    toast[status](message)

    status === "success"  && dispatch(getAllCartAction())
} 

export const getAllCartAction = () => async(dispatch)=> {
    const {status, result} = await getCart() 

    status === "success" && dispatch(setCart(result))
}