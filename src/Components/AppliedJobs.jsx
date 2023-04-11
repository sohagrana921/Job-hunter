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
      <div className="flex justify-end mr-56 my-8">
        <div className="border w-32 h-12">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <a>
                <p className="font-bold">Filter By</p>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a className="font-semibold">Remote</a>
                </li>
                <li>
                  <a className="font-semibold">Full Time</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {initialCart.map((details) => (
        <AppliedJobCard key={details.id} details={details}></AppliedJobCard>
      ))}
    </div>
  );
};

export default AppliedJobs;
