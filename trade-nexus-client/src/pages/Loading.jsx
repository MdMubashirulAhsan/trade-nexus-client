import Lottie from 'lottie-react';
import React from 'react';
import loading from '../assets/lotties/loading.json'

const Loading = () => {
    return (
        <div >
            <Lottie
        animationData={loading}
        loop
        autoplay
        className="w-[70vw] mx-auto h-[100vh]" 
      />
            
        </div>
    );
};

export default Loading;