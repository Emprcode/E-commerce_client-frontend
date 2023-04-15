import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import GlobalMsg from "./GlobalMsg";
import { StoreInfo } from "./StoreInfo";
import { ProSidebarProvider } from 'react-pro-sidebar';
export const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column">
      <GlobalMsg/>
      <Header />
<ProSidebarProvider>
      <div className="main">{children}</div> </ProSidebarProvider>
      <StoreInfo/>
      <Footer />
    </div>
  );
};
