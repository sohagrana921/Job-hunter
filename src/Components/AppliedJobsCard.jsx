import React, { useState } from "react";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const AppliedJobsCard = ({ initialCart }) => {
  const [filter, setFilter] = useState("All");
  const filteredCart =
    filter === "All"
      ? initialCart
      : initialCart.filter((job) => job.remoteOrOnsite === filter);
  return (
    <div>
      <div className="dropdown dropdown-bottom flex justify-end mr-52 mb-10">
        <label tabIndex={0} className="btn m-1 btn-primary">
          Filter by <ArrowDownIcon className="h-6 w-6 mr-1 ml-2" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button onClick={() => setFilter("All")}>All</button>
          </li>
          <li>
            <button onClick={() => setFilter("Remote")}>Remote</button>
          </li>
          <li>
            <button onClick={() => setFilter("Onsite")}>Onsite</button>
          </li>
        </ul>
      </div>
      {filteredCart.map((details) => (
        <div key={details.id}>
          <div className="border-2 rounded-lg shadow-md flex mx-auto mb-5 w-8/12 h-64 justify-between">
            <div className="flex items-center p-4">
              <img
                className="w-40 h-40 mr-10 object-contain bg-slate-200 p-3 rounded"
                src={details.companyLogo}
                alt=""
              />
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{details.jobTitle}</h3>
                <h5 className="text-lg font-medium">{details.companyName}</h5>
                <div className="flex gap-3 my-5">
                  <button className="btn-secondary hover:bg-gray-300 py-1 px-4 rounded-full">
                    {details.remoteOrOnsite}
                  </button>
                  <button className="btn-secondary hover:bg-gray-300 py-1 px-4 rounded-full">
                    {details.fulltimeOrParttime}
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <p className="flex items-center font-medium">
                    <MapPinIcon className="h-6 w-6 mr-1" />
                    {details.location}
                  </p>
                  <p className="flex items-center ml-4 font-medium">
                    <CurrencyDollarIcon className="h-6 w-6 mr-1" /> Salary:
                    {details.salary}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center pr-4">
              <Link to={`/details/${details.id}`}>
                <button className="btn">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobsCard;
