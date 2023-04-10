import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="page-title">Blog Page</h1>
      <div className="my-container  border-2">
        <h1 className="text-center text-4xl font-bold">
          Answer Some Question:-
        </h1>
        <div className=" mt-12 p-10">
          <h3 className="text-2xl font-bold">
            1. When should use context API?
          </h3>
          <p className="text-xl font-semibold">
            Ans:-
            <span>
              Context API should use when data that needs to be pass multiple
              components and passing props down through the component tree then
              it should use.
            </span>
          </p>
        </div>
        <div className=" mt-4 p-10">
          <h3 className="text-2xl font-bold">2. What is a custom hook??</h3>
          <p className="text-xl font-semibold">
            Ans:- <span></span>
          </p>
        </div>
        <div className=" mt-4 p-10">
          <h3 className="text-2xl font-bold">3. What is useRef??</h3>
          <p className="text-xl font-semibold">
            Ans:- <span></span>
          </p>
        </div>
        <div className=" mt-4 p-10">
          <h3 className="text-2xl font-bold">4. What is useMemo??</h3>
          <p className="text-xl font-semibold">
            Ans:- <span></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
