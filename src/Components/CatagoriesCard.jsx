import React from "react";

const CatagoriesCard = ({ job }) => {
  const { job_category_logo, category_name, available_jobs } = job;
  return (
    <div>
      <div className="border rounded-md bg-slate-100 ps-8 py-10 ml-3 ">
        <div className="w-20 h-20 bg-blue-300 flex justify-center items-center rounded-md sm:text-center">
          <img
            className="w-10 h-10 rounded-md"
            src={job_category_logo}
            alt=""
          />
        </div>
        <div className="text-start mt-8">
          <h3 className="text-xl font-semibold">{category_name}</h3>
          <p>{available_jobs} Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default CatagoriesCard;
