import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const data = useParams();
  console.log(data);
  return (
    <div>
      <h1 className="page-title">Job Details</h1>
      <div className="my-container"></div>
    </div>
  );
};

export default JobDetails;
