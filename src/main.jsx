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
import Statistics from "./Components/Statistics";
import AppliedJobs from "./Components/AppliedJobs";
import Blog from "./Components/Blog";
import ErrorPage from "./Components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/featuredjobs.json"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/featuredjobs.json"),
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
