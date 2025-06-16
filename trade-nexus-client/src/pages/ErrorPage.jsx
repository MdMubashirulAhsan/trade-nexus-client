import Lottie from "lottie-react";
import React from "react";
import notFoundAnimation from "../assets/lotties/error.json";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title> Error - Trade Nexus</title>
      </Helmet>

      <div>
        <Lottie
          animationData={notFoundAnimation}
          loop
          autoplay
          className="w-[70vw] mx-auto h-[100vh]"
        />
      </div>
    </>
  );
};

export default ErrorPage;
