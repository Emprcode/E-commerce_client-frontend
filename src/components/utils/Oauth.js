import React from "react";
import { Button } from "react-bootstrap";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleSignInAction } from "../redux/user/UserAction";

export const Oauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      // console.log(result);
      const { displayName, email, photoURL } = result.user;
      const user = { name: displayName, email, photo: photoURL };
      dispatch(googleSignInAction(user));
      navigate("/cart");
    } catch (error) {
      console.log("The error is: ", error);
    }
  };
  return (
    <div className="d-grid col-lg-5 text-center">
      <Button
        type="button"
        variant="dark"
        className="fw-bold mt-4 p-2"
        onClick={handleGoogleClick}
      >
        {" "}
        GOOGLE SIGN IN
      </Button>
    </div>
  );
};
