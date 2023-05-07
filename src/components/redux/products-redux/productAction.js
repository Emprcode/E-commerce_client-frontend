import { fetchAllProducts, fetchSingleProduct } from "../../helper/axiosHelper"
import { setProducts, setSelectedProduct } from "./productSlice"


export const getAllProductsAction  = () => async(dispatch) => {
    const {status, result } = await fetchAllProducts()

    console.log(result)
    status === "success" && dispatch(setProducts(result))
}

export const getSingleProductAction = (slug) => async(dispatch) => {
    const {status, result} = await fetchSingleProduct(slug)
console.log(status, result)
    status === "success" && dispatch(setSelectedProduct(result))
}