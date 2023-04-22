import { fetchProducts } from "../helper/axiosHelper"
import { setProducts } from "./productSlice"


export const getAllProductsAction  = () => async(dispatch) => {
    const {status, result } = await fetchProducts()

    console.log(result)
    status === "success" && dispatch(setProducts(result))
}