import React from "react";
import Catagories from "./Catagories";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-container">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Statistics</NavLink>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Applied Jobs</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <a className="text-2xl font-extrabold mr-auto text-slate-800">
            Job Hunter
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-bold">Statistics</a>
            </li>
            <li tabIndex={0}>
              <a className="font-bold">Applied Jobs</a>
            </li>
            <li>
              <a className="font-bold">Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="inline-flex items-center h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-500 hover:bg-blue-700">
            <button>Start Applying</button>
          </a>
        </div>
      </div>
      <div className="flex justify-between my-12">
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

export default Home;
