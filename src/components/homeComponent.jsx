import React from "react";
import "../App.css";
import homeImage from "../assets/images/1.jpg";

const HomeComponent = () => {
  return (
    <div className=" font-dinregular">
      <div className="home-container flex flex-col md:flex-row lg:flex-row py-4">
        <div className="text-white text-lg top-1/4 px-2 font-bold  md:w-1/2 lg:w-1/2 md:m-auto lg:m-auto my-2">
          <img
            src={homeImage}
            alt="web-design and development"
            className=" w-1/3 m-auto rounded-full outline outline-offset-4 outline-2"
          />
          <div className="font-normal text-xl m-4">Nimrod Ambetsa.</div>
        </div>
        <div className="text-white capitalize md:text-lg lg:text-lg top-1/4 md:w-1/3 lg:w-1/3 px-4 font-bold  m-auto">
          <div className="font-dinregular p-4">
            "Good software, like wine, takes time."
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
