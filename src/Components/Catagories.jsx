import React, { useEffect, useState } from "react";
import CatagoriesCard from "./CatagoriesCard";
import FeaturedJobs from "./FeaturedJobs";

const Catagories = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center mt-32">
      <h1 className="text-5xl font-bold mb-4">Job Category List</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-4 sm:grid-cols-2  mt-8 ">
        {jobs.map((job) => (
          <CatagoriesCard key={job.id} job={job}></CatagoriesCard>
        ))}
      </div>
      <div className="mt-36">
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Catagories;
