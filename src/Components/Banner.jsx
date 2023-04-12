import React from "react";
import Catagories from "./Catagories";

const Banner = () => {
  return (
    <div className="my-container">
      <div className="md:flex justify-between mb-12">
        <div>
          <h1 className="text-6xl font-bold ">
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
        <div>
          <img
            className="h-96 w-80"
            src="https://img.freepik.com/free-photo/handsome-man-pointing-lateral_1368-5182.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
      <Catagories></Catagories>
    </div>
  );
};

export default Banner;
