import Lottie from 'lottie-react';
import React from 'react';
import notFoundAnimation from '../assets/lotties/error.json'

const ErrorPage = () => {
    return (
        <div className='h-[60vh]'>
            <Lottie
        animationData={notFoundAnimation}
        loop
        autoplay
        className="w-[30vw] mx-auto h-[60vh]" 
      />
            
        </div>
    );
};

export default ErrorPage;