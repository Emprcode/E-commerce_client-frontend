import React from "react";
import { Link } from "react-router-dom";

const GlobalMsg = () => {
  return (
    <div className="bgcolor">
      <div className=" p-1 d-flex justify-content-between">
        <div className="gbl-font">Free Shipping on Orders +$100</div>
        <div className="d-flex gap-2 justify-content-around flex-row">
          <Link className="nav-link gbl-font" to="/">
            <i className="fa-solid fa-phone-volume C"></i> 02 9876 5463 |{" "}
          </Link>
          <Link className="nav-link gbl-font" to="/">
            Find a store |{" "}
          </Link>
          <Link className="nav-link gbl-font" to="/">
            {" "}
            Help{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GlobalMsg;
