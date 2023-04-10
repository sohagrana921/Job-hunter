import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
const FeaturesCard = ({ features }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrParttime,
    location,
    salary,
  } = features;
  return (
    <div className="border rounded-md text-start  py-10 pl-10 ">
      <img className="w-28 h-10" src={companyLogo} alt="" />
      <h3 className="mt-8 text-2xl font-bold">{jobTitle}</h3>
      <h5 className="text-lg font-medium">{companyName}</h5>
      <div className="flex inline-flex gap-3 my-2">
        <button className="btn-secondary">{remoteOrOnsite}</button>
        <button className="btn-secondary">{fulltimeOrParttime}</button>
      </div>
      <div className="flex items-center mt-2 ">
        <p className="flex inline-flex font-medium">
          <MapPinIcon className="h-6 w-6 " /> {location}
        </p>
        <p className="flex inline-flex ml-2 font-medium">
          <CurrencyDollarIcon className="h-6 w-6" /> Salary: {salary}
        </p>
      </div>
      <button className="btn mt-8">View Details</button>
    </div>
  );
};

export default FeaturesCard;
