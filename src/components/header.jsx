import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

const HeaderComponent = () => {
  return (
    <div className="bg-transparent z-auto absolute w-full px-2">
      <div className="hidden md:flex lg:flex md:text-white lg:text-white  md:justify-between lg:justify-between">
        <div>
          <ul className="flex items-center uppercase">
            <li className="p-4">home</li>
            <li className="p-4">Projects</li>
            <li className="p-4">contacts</li>
          </ul>
        </div>

        <div>
          <ul className="flex items-center">
            <li className="p-4">
              <FaTwitter />
            </li>
            <li className="p-4">
              <FaGithub />
            </li>
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
