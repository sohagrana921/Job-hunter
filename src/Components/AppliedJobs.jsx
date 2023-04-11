import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilities/fakebf";

import AppliedJobCard from "./AppliedJobCard";
const AppliedJobs = () => {
  const data = useLoaderData();

  const savedCart = getShoppingCart();
  const initialCart = [];
  for (const id in savedCart) {
    const foundProduct = data.find((product) => product.id == id);
    if (foundProduct) {
      initialCart.push(foundProduct);
    }
  }
  return (
    <div>
      <h1 className="page-title">Applied Jobs</h1>
      {initialCart.map((details) => (
        <AppliedJobCard key={details.id} details={details}></AppliedJobCard>
      ))}
    </div>
  );
};

export default AppliedJobs;
