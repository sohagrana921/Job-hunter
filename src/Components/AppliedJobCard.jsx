import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const AppliedJobCard = ({ details }) => {
  console.log(details);
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrParttime,
    location,
    salary,
  } = details;
  return (
    <div>
      <div className="border-2 rounded-lg shadow-md flex mx-auto mb-5 w-8/12 h-64 justify-between">
        <div className="flex items-center p-4">
          <img
            className="w-40 h-40 mr-10 object-contain bg-slate-200 p-3 rounded"
            src={companyLogo}
            alt=""
          />
          <div className="ml-4">
            <h3 className="text-2xl font-bold">{jobTitle}</h3>
            <h5 className="text-lg font-medium">{companyName}</h5>
            <div className="flex gap-3 my-5">
              <button className="btn-secondary hover:bg-gray-300 py-1 px-4 rounded-full">
                {remoteOrOnsite}
              </button>
              <button className="btn-secondary hover:bg-gray-300 py-1 px-4 rounded-full">
                {fulltimeOrParttime}
              </button>
            </div>
            <div className="flex items-center mt-2">
              <p className="flex items-center font-medium">
                <MapPinIcon className="h-6 w-6 mr-1" />
                {location}
              </p>
              <p className="flex items-center ml-4 font-medium">
                <CurrencyDollarIcon className="h-6 w-6 mr-1" /> Salary:
                {salary}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center pr-4">
          <Link to={`/details/${id}`}>
            <button className="btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;
