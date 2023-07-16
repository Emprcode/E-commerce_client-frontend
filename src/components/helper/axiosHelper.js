import axios from "axios";

const apiRoot = process.env.REACT_APP_ROOT_API ;

const productUrl = apiRoot + "/products";

const categoryUrl = apiRoot + "/categories";

const cartUrl = apiRoot + "/cart"

const paymentUrl = apiRoot + '/payment'

const axiosProcessor = async ({ method, url, objDt }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: objDt,
    });
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};

//fetch all products

export const fetchAllProducts = async () => {
  const obj = {
    method: "get",
    url: productUrl,
  };
  return axiosProcessor(obj);
};


//fetch single Product based on slug
export const fetchSingleProduct = async (slug) => {
  const obj = {
    method: "get",
    url: productUrl + "/" + slug,
  };
  return axiosProcessor(obj);
};



//fetch all cats

export const fetchAllCategories = async () => {
  const obj = {
    method: "get",
    url: categoryUrl,
  };
  return axiosProcessor(obj);
};
// add product to cart

export const addToCart = async(objDt) => {
  const obj = {
    method:"post",
    url: cartUrl,
    objDt 
  }
  return axiosProcessor(obj)
}

// get product in cart

export const getCart = async() => {
  const obj = {
    method:"get",
    url: cartUrl,
     
  }
  return axiosProcessor(obj)
}




//checkout session

export const checkoutSession = async(objDt) => {
  const obj = {
    method: "post",
    url: paymentUrl + '/create-checkout-session',
    objDt
  }
  return axiosProcessor(obj)
}