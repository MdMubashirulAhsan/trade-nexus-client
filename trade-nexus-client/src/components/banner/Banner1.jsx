import React from "react";

import bannerImg1 from "../../assets/bannerImg/air_fryer.webp";
import { motion } from "framer-motion";

const Banner1 = () => {
  return (
    <div className="hero  min-h-screen bg-base-200 text-base-content h-[90vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="h-[70vh] w-[70vw] ">
          <img
            src={bannerImg1}
            // animate={{ y: [100, 150, 100] }}
            // transition={{ duration: 5, repeat: Infinity }}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div>
          <motion.h1
            className="text-5xl font-bold"
            initial={{ scale: 0.5, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Super{" "}
            <motion.span
              animate={{
                color: ["#dc2626", "#f59e0b", "#22c55e", "#3b82f6", "#dc2626"], // red → amber → green → blue → red
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              Discount
            </motion.span>{" "}
            Just Dropped!
          </motion.h1>
          <p className="py-6">
            Save 35% on this product today only! Take advantage of this
            limited-time offer before it's gone. No code needed — discount
            applied at checkout.
          </p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
