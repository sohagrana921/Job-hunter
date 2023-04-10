import React from "react";
import Catagories from "./Catagories";

const Banner = () => {
  return (
    <div className="my-container">
      <div className="md:flex justify-between mb-12">
        <div>
          <h1 className="text-7xl font-bold ">
            One Step <br /> Closer To Your <br />
            <span className="text-blue-500">Dream Job</span>
          </h1>
          <p className="my-6 text-xl">
            Explore thousands of job opportunities with all the <br />
            information you need. Its your future. Come find it. Manage <br />
            all your job application from start to finish.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="md:ml-48">
          <img src="../../public/P3OLGJ1 copy 1.png" alt="" />
        </div>
      </div>
      <Catagories></Catagories>
    </div>
  );
};

export default Banner;
