import React from "react";

const CatagoriesCard = ({ job }) => {
  const { job_category_logo, category_name, available_jobs } = job;
  return (
    <div>
      <div className="w-64 h-64 border rounded-md bg-slate-100 ps-10 py-10">
        <div className="w-20 h-20 bg-blue-300 flex justify-center items-center rounded-md">
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
