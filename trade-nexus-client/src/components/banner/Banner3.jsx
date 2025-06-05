import React from 'react';

const Banner3 = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/d3ksK6S/b2b-platform-loading-cargo-forklift-600nw-1847192989.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner3;