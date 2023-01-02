import React from "react";
import CardComponent from "./card";

const SkillComponent = () => {
  return (
    <div className="card-container flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 items-center justify-center p-4 w-full">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
};

export default SkillComponent;
