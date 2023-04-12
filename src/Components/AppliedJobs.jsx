import { Link, useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilities/fakebf";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import AppliedJobsCard from "./AppliedJobsCard";
const AppliedJobs = () => {
  const [filter, setFilter] = useState("All");
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
      <div className="flex justify-center ">
        <h1 className="page-title ">Applied Jobs</h1>
      </div>
      <AppliedJobsCard initialCart={initialCart}></AppliedJobsCard>
    </div>
  );
};

export default AppliedJobs;
