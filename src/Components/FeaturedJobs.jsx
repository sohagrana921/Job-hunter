import React, { useEffect, useState } from "react";
import FeaturesCard from "./FeaturesCard";

const FeaturedJobs = () => {
  const [featureJobs, setFeatureJobs] = useState([]);
  useEffect(() => {
    fetch("featuredjobs.json")
      .then((res) => res.json())
      .then((data) => setFeatureJobs(data.slice(0, 4)));
  }, []);
  const seeAllJobs = () => {};
  return (
    <div>
      <h3 className="text-5xl font-bold mb-4">Featured Jobs</h3>
      <p className="mb-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-10">
        {featureJobs.map((features) => (
          <FeaturesCard key={features.id} features={features}></FeaturesCard>
        ))}
      </div>
      <button className="btn mt-10" onClick={seeAllJobs}>
        See All Jobs
      </button>
    </div>
  );
};

export default FeaturedJobs;
