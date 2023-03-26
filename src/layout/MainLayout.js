import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};
