import React from "react";
import { Outlet } from "react-router";

import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div className=" mx-auto">
      <NavBar></NavBar>
      <div className="bg-base-100 p-[5vw] min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
