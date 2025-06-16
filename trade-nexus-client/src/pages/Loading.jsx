import Lottie from "lottie-react";
import React from "react";
import loading from "../assets/lotties/loading.json";

const Loading = () => {
  return (
    <div>
      <Lottie
        animationData={loading}
        loop
        autoplay
        className="w-[20vw] mx-auto h-[20vh]"
      />
    </div>
  );
};

export default Loading;
