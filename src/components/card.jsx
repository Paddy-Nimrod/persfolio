import React from "react";

const CardComponent = () => {
  return (
    <div className="grid grid-cols-1 gap md:grid-cols-3 lg:grid-cols-3 w-full my-4 font-dinregular">
      <div className="card bg-slate-900 text-white p-5">
        <div className="p-4 items-center">
          <h2 className=" text-lg font-bold m-2 leading-6">
            Full Stack Development
          </h2>
          <div className="p-4">
            Cicenic Engineering group deals with design and Development of
            application from conception to production. This follows the standard
            Software Developoment Life Cycle.{" "}
            <i className=" underline underline-offset-1 hover:cursor-pointer">
              Read more
            </i>
          </div>
        </div>
      </div>
      <div className="card bg-slate-900 text-white p-5">
        <div className="p-4 items-center">
          <h2 className=" text-lg font-bold m-2 leading-6">
            Front End Development
          </h2>
          <div className="p-4">
            At Cicenic Software Engineering, we have skilled, experienced and
            enthusiastic UI designers and Front end development gurus who enjoy
            turning code into appealing craft.{" "}
            <i className=" underline underline-offset-1 hover:cursor-pointer">
              Read more
            </i>
          </div>
        </div>
      </div>
      <div className="card bg-slate-900 text-white p-5">
        <div className="p-4 items-center">
          <h2 className=" text-lg font-bold m-2 leading-6">
            Backend Development
          </h2>
          <div>
            Cicenic Engineering views an application Backend as the application
            engine. We treat every logic with deep interest and hence ensure the
            application is world class standard through test driven development.{" "}
            <i className=" underline underline-offset-1 hover:cursor-pointer">
              Read more
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
