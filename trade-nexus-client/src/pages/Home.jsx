import React from 'react';
import Banner from '../components/banner/Banner1';
import ProductCategories from '../components/ProductCategories';
import { Slider } from '../components/banner/Slider';
import { Helmet } from 'react-helmet';
import GetOurUpdates from '../components/GetOurUpdates';
import { useLoaderData } from 'react-router';

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <Helmet>
        <title>Home - Trade Nexus</title>
      </Helmet>
            <Slider></Slider>
            <ProductCategories products={products}></ProductCategories>
            <GetOurUpdates></GetOurUpdates>
        </div>
    );
};

export default Home;