import { useLoaderData, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";
const JobDetails = () => {
  const data = useParams();
  const jobs = useLoaderData();
  const filterData = jobs.find((p) => p.id == data.id);
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    contactInformation,
    location,
  } = filterData;
  return (
    <div>
      <h1 className="page-title">Job Details</h1>
      <div className=" flex m-60 gap-10 ">
        <div>
          <h3>
            <span className="font-bold">Job Description : </span>
            {jobDescription}
          </h3>
          <h3 className="mt-8">
            <span className="font-bold">Job Responsibility :</span>{" "}
            {jobResponsibility}
          </h3>
          <h3 className="my-8 font-bold ">Educational Requirements:</h3>
          <p>{educationalRequirements}</p>
          <h3 className="font-bold my-6">Experiences:</h3>
          <p>{experiences}</p>
        </div>
        {/* Card Section */}
        <div>
          <div className="border w-96 p-8 rounded bg-slate-200">
            <h3 className="font-bold mb-2">Job Details</h3> <hr />
            <p className="flex  ml-2 font-medium items-center py-3">
              <CurrencyDollarIcon className="h-6 w-6 text-blue-500 mr-2" />
              Salary: {salary}
            </p>
            <p className="flex ml-2 font-medium items-center">
              <CalendarDaysIcon className="h-6 w-6 text-blue-500 mr-2" /> Job
              Title : {jobTitle}
            </p>
            <p className="font-bold m-3">Contact Information</p>
            <hr />
            <p className="flex  ml-2 font-medium items-center mt-3">
              <PhoneIcon className="h-4 w-4 text-blue-500 mr-2" /> Phone :
              {contactInformation.phone}
            </p>
            <p className="flex  ml-2 font-medium items-center py-2">
              <ChatBubbleBottomCenterIcon className="h-4 w-4 text-blue-500 mr-2" />
              Email :{contactInformation.email}
            </p>
            <p className="flex  ml-2 font-medium items-center">
              <MapPinIcon className="h-6 w-6 text-blue-500 mr-2" /> Address:
              {location}
            </p>
          </div>
          <button className="btn w-full mt-3">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
