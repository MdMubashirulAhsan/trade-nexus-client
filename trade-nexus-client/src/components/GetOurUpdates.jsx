import React from "react";

const GetOurUpdates = () => {
  return (
    <div className="w-full bg-base-200 mt-20">
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center text-primary mb-10">
          Get Our Updates
        </h1>
        <p className="pt-2 pb-8 text-xl antialiased text-center text-base-content">
          Find out about events and other news
        </p>
        <div className="join ">
          <div>
            <label className="input validator join-item text-base-content">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-neutral join-item">Join</button>
        </div>
      </div>
    </div>
  );
};

export default GetOurUpdates;
