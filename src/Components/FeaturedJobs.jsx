import React, { useEffect, useState } from "react";
import FeaturesCard from "./FeaturesCard";

const FeaturedJobs = () => {
  const [featureJobs, setFeatureJobs] = useState([]);
  useEffect(() => {
    fetch("featuredjobs.json")
      .then((res) => res.json())
      .then((data) => setFeatureJobs(data.slice(0, 4)));
  }, []);
  const seeAllJobs = () => {
    fetch("featuredjobs.json")
      .then((res) => res.json())
      .then((data) => setFeatureJobs(data));
  };
  const seeLessJobs = () => {
    fetch("featuredjobs.json")
      .then((res) => res.json())
      .then((data) => setFeatureJobs(data.slice(0, 4)));
  };
  return (
    <div>
      <h3 className="text-5xl font-bold mb-4">Featured Jobs</h3>
      <p className="mb-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:grid grid-cols-2 gap-10">
        {featureJobs.map((features) => (
          <FeaturesCard key={features.id} features={features}></FeaturesCard>
        ))}
      </div>
      {featureJobs.length == 4 ? (
        <button className="btn mt-10" onClick={seeAllJobs}>
          See All Jobs
        </button>
      ) : (
        <button className="btn mt-10" onClick={seeLessJobs}>
          See Less
        </button>
      )}
    </div>
  );
};

export default FeaturedJobs;
