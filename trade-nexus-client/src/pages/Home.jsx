import React from "react";
import { Slider } from "../components/banner/Slider";
import { Helmet } from "react-helmet";
import GetOurUpdates from "../components/GetOurUpdates";
import Categories from "../components/Categories";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Trade Nexus</title>
      </Helmet>

      <div className="-m-[5vw] space-y-10">
        <Slider></Slider>
        <Categories></Categories>
        <FAQ></FAQ>
        <GetOurUpdates></GetOurUpdates>
      </div>
    </>
  );
};

export default Home;
