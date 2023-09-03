import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import GlobalMsg from "./GlobalMsg";
import { StoreInfo } from "./StoreInfo";

export const MainLayout = ({ children }) => {
  return (
    <div className="">
      <GlobalMsg/>
      <Header />

      <div className="main">{children}</div> 
      <StoreInfo className="mt-5" />
      <Footer />
    </div>
  );
};
