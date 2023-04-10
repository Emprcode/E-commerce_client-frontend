import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import GlobalMsg from "./GlobalMsg";
import { StoreInfo } from "../components/page-components/StoreInfo";

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
