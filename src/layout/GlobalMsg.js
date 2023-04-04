import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const GlobalMsg = () => {
  return (
    <div className="bgcolor">
      <div className=" p-2 d-flex justify-content-between">
        <div>
        Free Shipping on Orders +$100
        </div>
        <div className="d-flex gap-2 justify-content-around flex-row">
        <Link className='nav-link' to="/"><i className="fa-solid fa-phone-volume"></i> 0000 000 000 | </Link>
        <Link  className='nav-link' to="/">Find a store | </Link>
        <Link  className='nav-link' to="/"> Help </Link>
      
        </div>
      </div>
    </div>
  );
};

export default GlobalMsg;
