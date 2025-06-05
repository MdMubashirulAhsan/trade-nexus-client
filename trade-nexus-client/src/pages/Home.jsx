import React from 'react';
import Banner from '../components/banner/Banner1';
import ProductCategories from '../components/ProductCategories';
import { Slider } from '../components/banner/Slider';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home - Trade Nexus</title>
      </Helmet>
            <Slider></Slider>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;