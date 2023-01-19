import React from "react";
import "../App.css";
import homeImage from "../assets/images/home-img.jpg";

const HomeComponent = () => {
  return (
    <div>
      <div className="home-container flex flex-row  px-4 place-content-between">
        <div className="text-white text-lg top-1/4 w-1/2 px-4 font-bold absolute m-auto">
          <h1>Welcome to nimrods tech space</h1>
        </div>
        <div className="text-white text-lg top-1/4 px-4 font-bold absolute w-1/2 m-auto">
          <img
            src={homeImage}
            alt="web-design and development"
            className="w-full m-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
