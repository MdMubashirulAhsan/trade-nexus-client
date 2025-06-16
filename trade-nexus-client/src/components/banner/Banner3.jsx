import React from "react";
import { motion } from "framer-motion";

const Banner3 = () => {
  return (
    <div
      className="hero min-h-screen h-[90vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/d3ksK6S/b2b-platform-loading-cargo-forklift-600nw-1847192989.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <motion.h1
            className="text-5xl font-bold "
            initial={{ scale: 0.5, opacity: 0, y: -50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
          >
            Today’s <motion.span animate={{
        color: ["#dc2626", "#f59e0b", "#22c55e", "#3b82f6", "#dc2626"], // red → amber → green → blue → red
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }} >Hot Deal</motion.span>
          </motion.h1>
          <p className="py-6">
            Grab every product with an exclusive 11% discount — available for a
            short time only. It's the perfect time to buy more and save big!
          </p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
