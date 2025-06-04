import React from 'react';
import Banner from '../components/banner/Banner1';
import ProductCategories from '../components/ProductCategories';
import { Slider } from '../components/banner/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;