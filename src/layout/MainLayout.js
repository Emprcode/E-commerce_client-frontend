import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import GlobalMsg from "./GlobalMsg";

export const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column">
      <GlobalMsg/>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};
