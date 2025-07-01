import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
 
  return (
    <>
      <Helmet>
        <title> About - Trade Nexus</title>
      </Helmet>

      

      <div className="text-base-content bg-base-200">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to our global B2B wholesale marketplace — a digital platform
          built to connect bulk product suppliers directly with retailers,
          resellers, and institutional buyers around the world. Our mission is
          to streamline the bulk buying and selling experience by offering a
          secure, scalable, and efficient environment for wholesale trade.
        </p>
        <p className="mb-4">
          Whether you're a manufacturer, distributor, or sourcing agent, our
          platform empowers you to list multi-category products such as
          electronics, gadgets, fashion, home appliances, and industrial
          machinery — all under one roof. We prioritize transparency, trust, and
          transaction safety to foster long-term business relationships.
        </p>
        <p className="mb-4">
          With integrated tools for logistics management, real-time order
          tracking, and secure payment processing, we’re not just facilitating
          commerce — we’re building a robust ecosystem where businesses grow and
          scale together.
        </p>
        <p className="mb-4 font-semibold">
          Join us in transforming the future of global wholesale trade.
        </p>
      </div>
    </>
  );
};

export default About;
