import axios from "axios";

const apiRoot = process.env.REACT_APP_ROOT_API;

const productApi = apiRoot + "/product";

const axiosProcessor = async ({ method, url, objDt }) => {
  try {
    const { data } = await axios({
      method,
      url,
      //   data: objDt,
    });
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};

export const fetchProducts = async () => {
  const obj = {
    method: "get",
    url: productApi,
  };
  return axiosProcessor(obj);
};
