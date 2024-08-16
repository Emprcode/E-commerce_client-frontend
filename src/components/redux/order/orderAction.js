import { getOrder } from "../../helper/axiosHelper";
import { setOrders } from "./orderSlice";

export const getOrdersAction = () => async (dispatch) => {
  const { status, result } = await getOrder();

  status === "success" && dispatch(setOrders(result));
};
