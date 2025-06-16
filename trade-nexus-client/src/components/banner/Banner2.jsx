import React from "react";
import bannerImg2 from "../../assets/bannerImg/airbud.jpg";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <div className="hero bg-base-200 min-h-screen text-base-content h-[90vh]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="h-[70vh] w-[70vw] ">
          <img
            src={bannerImg2}
            // animate={{ x: [100, 150, 100] }}
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
            Flash Sale – Up to{" "}
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
              40%
            </motion.span>{" "}
            OFF!
          </motion.h1>
          <p className="py-6">
            For the next 24 hours, enjoy up to 40% off this item. Don’t miss
            your chance to get it at the best price ever. Act fast, stock is
            limited!
          </p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
