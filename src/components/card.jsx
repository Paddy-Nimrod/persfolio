import React from "react";

const CardComponent = () => {
  return (
    <div className="grid grid-cols-1 gap md:grid-cols-3 lg:grid-cols-3 w-full my-4">
      <div className="card bg-slate-900 text-white">
        <div className="p-4 items-center">
          <h2 className=" text-lg font-bold m-2 ">Technology</h2>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Java</li>
            <li>Spring Boot</li>
          </ul>
        </div>
      </div>
      <div className="card bg-slate-900 text-white">
        <div className="p-4 items-center">
          <h2>Technology</h2>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Java</li>
            <li>Spring Boot</li>
          </ul>
        </div>
      </div>
      <div className="card bg-slate-900 text-white">
        <div className="p-4 items-center">
          <h2 className=" text-lg font-bold text-center ">Technology</h2>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Java</li>
            <li>Spring Boot</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
