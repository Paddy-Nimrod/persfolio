import React from "react";

const HeaderComponent = () => {
  return (
    <div className="bg-transparent z-auto absolute w-full">
      <div className="hidden md:flex lg:flex md:text-white lg:text-white  md:justify-between lg:justify-between">
        <div>
          <ul className="flex items-center">
            <li className="p-4">home</li>
            <li className="p-4">skills</li>
            <li className="p-4">contacts</li>
          </ul>
        </div>
        
        <div>
          <ul className="flex items-center">
            <li className="p-4">twitter</li>
            <li className="p-4">github</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-start md:hidden p-4">
        <div className="text-white font-bold m-4 border rounded-md p-1">
          Nimrod
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
