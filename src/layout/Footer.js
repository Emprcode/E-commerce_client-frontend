import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container>
      <div className="text-center p-5">
        &copy; 2023 || all right reserved || aceXsports
        <br />
        <div>
          Developed by @Emprcode
          {/* &&
          <span>
            <Link
              to="https://snyprs.netlify.app/"
              target="_blank"
              className="nav-link"
            >
              Snyprs
            </Link>{" "}
          </span> */}
        </div>
      </div>
    </Container>
  );
};
