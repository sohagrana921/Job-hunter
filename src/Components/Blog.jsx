import React from "react";

const Blog = () => {
  return (
    <div>
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
          <h3 className="text-2xl font-bold">2. What is a custom hook?</h3>
          <p className="text-xl font-semibold">
            Ans:-{" "}
            <span>
              Custom Hook is a JavaScript function which we create by ourselves,
              when we want to share logic between other JavaScript functions.
            </span>
          </p>
        </div>
        <div className=" mt-4 p-10">
          <h3 className="text-2xl font-bold">3. What is useRef?</h3>
          <p className="text-xl font-semibold">
            Ans:-{" "}
            <span>
              useRef is a built-in React hook that accepts one argument as the
              initial value and returns a reference . A reference is an object
              having a special property current .
            </span>
          </p>
        </div>
        <div className=" mt-4 p-10">
          <h3 className="text-2xl font-bold">4. What is useMemo?</h3>
          <p className="text-xl font-semibold">
            Ans:-{" "}
            <span>
              useMemo is a React Hook that lets cache the result of a
              calculation between re-renders.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
