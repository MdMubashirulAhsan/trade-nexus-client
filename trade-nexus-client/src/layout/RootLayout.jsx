import React from "react";
import { Outlet } from "react-router";

import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div className=" mx-auto">
      <NavBar></NavBar>
      <div className="bg-base-200 p-[5vw]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
