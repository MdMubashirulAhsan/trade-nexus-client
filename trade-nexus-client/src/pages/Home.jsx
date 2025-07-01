import React from "react";
import { Slider } from "../components/banner/Slider";
import { Helmet } from "react-helmet";
import GetOurUpdates from "../components/GetOurUpdates";
import Categories from "../components/Categories";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Trade Nexus</title>
      </Helmet>

      <div className="">
        <Slider></Slider>
        <Categories></Categories>
        <Blog></Blog>
        <FAQ></FAQ>
        <GetOurUpdates></GetOurUpdates>
      </div>
    </>
  );
};

export default Home;
