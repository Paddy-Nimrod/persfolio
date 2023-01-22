import React from "react";
import "../App.css";
import homeImage from "../assets/images/home-img.jpg";

const HomeComponent = () => {
  return (
    <div>
      <div className="home-container flex flex-row">
        <div className="text-white text-lg top-1/4 w-1/3 px-4 font-bold  m-auto">
          <h1>Welcome to nimrods tech space</h1>
        </div>
        <div className="text-white text-lg top-1/4 px-4 font-bold  w-1/2 m-auto">
          <img
            src={homeImage}
            alt="web-design and development"
            className="w-4/5 m-auto rounded-xl mix-blend-hard-light skew-y-5"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
