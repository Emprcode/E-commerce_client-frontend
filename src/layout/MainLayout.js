import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import GlobalMsg from "./GlobalMsg";
import { StoreInfo } from "./StoreInfo";

export const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column">
      <GlobalMsg/>
      <Header />
      <div className="main">{children}</div>
      <StoreInfo/>
      <Footer />
    </div>
  );
};
