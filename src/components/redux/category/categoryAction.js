import { fetchAllCategories } from "../../helper/axiosHelper"
import { setCats } from "./categorySlice"



export const getAllCategoriesAction  = () => async(dispatch) => {
    const {status, result } = await fetchAllCategories()

    // console.log(result)
    status === "success" && dispatch(setCats(result))
}
