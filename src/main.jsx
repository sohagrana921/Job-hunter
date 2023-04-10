import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobDetails from "./Components/JobDetails";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Catagories from "./Components/Catagories";
import FeaturedJobs from "./Components/FeaturedJobs";
import Banner from "./Components/Banner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "details",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("featuredjobs.json"),
      },
      {
        path: "/",
        element: <Footer></Footer>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
