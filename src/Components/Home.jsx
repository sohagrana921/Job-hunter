import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="my-container">
      <nav className="flex justify-center items-center">
        <Link className="text-2xl font-extrabold mr-auto">CareerHub</Link>
        <Link className="mr-10 font-bold">Statistics</Link>
        <Link className="mr-10 font-bold">Applied Jobs</Link>
        <Link className="font-bold">Blog</Link>
        <Link className="btn ml-auto">Start Applying</Link>
      </nav>
      <Banner></Banner>
    </div>
  );
};

export default Home;
