import React from "react";
import CardComponent from "./card";

const SkillComponent = () => {
  return (
    <div className="card-container flex items-center">
      <div className="flex p-4 w-full">
        <CardComponent />
      </div>
    </div>
  );
};

export default SkillComponent;
