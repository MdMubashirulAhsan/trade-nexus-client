import React from "react";
import { useLoaderData } from "react-router";
import DisplayCard from "../components/DisplayCard";
import { Helmet } from "react-helmet";

const Display = () => {
  const data = useLoaderData();

  return (
    <div>
      <Helmet>
        <title> Display - Trade Nexus</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  bg-base-200 p-5">
        {data?.map((p, i) => (
          <DisplayCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Display;
