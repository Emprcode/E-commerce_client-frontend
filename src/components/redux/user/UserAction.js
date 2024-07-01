import { toast } from "react-toastify";
import { getUser, googleSignIn, logoutUser } from "../../helper/axiosHelper";
import { setUser } from "./UserSlice";

//login with google
export const googleSignInAction = (user) => async (dispatch) => {
  const { status, message, token, rest } = await googleSignIn(user);
  console.log(status, message);

  if (status === "success" && token) {
    dispatch(setUser(rest));
    sessionStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(rest));
    toast[status](message);
  }
};

//fetch user
export const getUserProfile = () => async (dispatch) => {
  const { status, user, rest } = await getUser();
  if (status === "success" && user._id) {
    dispatch(setUser(rest));
  }
};

//auto login
export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  if (accessJWT && refreshJWT) {
    return dispatch(getUserProfile());
  }
};

//logout user

export const logoutUserProfile = () => async (dispatch) => {
  dispatch(setUser({}));

  //calling axios to logout
  logoutUser();

  //remove token

  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
};
