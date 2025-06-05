import React from "react";

import bannerImg1 from "../../assets/bannerImg/678a085f195045992c80605c_5ff388a279e1c733baec462f_Asset-07.png";
// import { motion } from "motion/react"

const Banner1 = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div >
          <img
        src={bannerImg1}
          // animate={{ y: [100, 150, 100] }}
          // transition={{ duration: 5, repeat: Infinity }}
          className="max-w-3xl  "
        />
        </div>
        
          <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
