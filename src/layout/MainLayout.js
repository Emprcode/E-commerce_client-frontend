import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { StoreInfo } from "./StoreInfo";

export const MainLayout = ({ children }) => {
  return (
    <div className="">
      {/* <GlobalMsg /> */}
      <Header />

      <div className="main">{children}</div>
      <br />
      <StoreInfo className="mt-5 pt-4" />
      <Footer />
    </div>
  );
};
