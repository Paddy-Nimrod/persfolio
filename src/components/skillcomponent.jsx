import React from "react";
import CardComponent from "./card";

const SkillComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-1 items-center bg-slate-500 w-full">
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};

export default SkillComponent;
