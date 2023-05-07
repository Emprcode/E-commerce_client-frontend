import axios from "axios";

const apiRoot = process.env.REACT_APP_ROOT_API;

const productUrl = apiRoot + "/products";
// const singleProductURL = apiRoot + `/products/${_id}`;

const axiosProcessor = async ({ method, url, objDt }) => {
  try {
    const { data } = await axios({
      method,
      url,
      //   data: objDt,
    });
    console.log(data)
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};

export const fetchAllProducts = async () => {
  const obj = {
    method: "get",
    url: productUrl,
  };
  return axiosProcessor(obj);
};

export const fetchSingleProduct = async (slug) => {
  const obj = {
    method: "get",
    url: productUrl + "/" + slug,
  };
  return axiosProcessor(obj);
};


