import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between my-12">
      <div>
        <h1 className="text-7xl font-bold ">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-blue-500">Dream Job</span>
        </h1>
        <p className="my-6 text-xl">
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage <br /> all your job
          application from start to finish.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div>
        <img
          className="h-96 w-80"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlVBhPJPHueCSFlytzFmfA8PHFdHW2_KtwA&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
