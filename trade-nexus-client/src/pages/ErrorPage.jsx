import Lottie from 'lottie-react';
import React from 'react';
import notFoundAnimation from '../assets/lotties/error.json'

const ErrorPage = () => {
    return (
        <div >
            <Lottie
        animationData={notFoundAnimation}
        loop
        autoplay
        className="w-[70vw] mx-auto h-[100vh]" 
      />
            
        </div>
    );
};

export default ErrorPage;