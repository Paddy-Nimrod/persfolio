import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="bg-white md:flex lg:flex h-16 z-10 absolute w-full px-2 font-dinregular border-b-2">
      <div className="hidden md:flex lg:flex md:text-black lg:text-black items-center md:justify-between lg:justify-between">
        <div className="mx-4 p-2">
          <div className=" text-2xl font-semibold rounded-sm border-black border-2 p-1">
            Nimrod
          </div>
        </div>

        <div className="">
          <ul className="flex items-center uppercase text-sm font-normal">
            <Link to="/">
              <li className="p-3 hover:underline hover:underline-offset-8">
                home
              </li>
            </Link>

            <Link to="/projects">
              <li className="p-3 hover:underline hover:underline-offset-8">
                Projects
              </li>
            </Link>
            <Link to="/contacts">
              <li className="p-3 hover:underline hover:underline-offset-8">
                contacts
              </li>
            </Link>
          </ul>
        </div>

        {/* <div className="bg-black ">
          <ul className="flex items-center">
            <li className="p-4">
              <FaGithub />
            </li>
          </ul>
        </div> */}
      </div>
      <div className="flex justify-start items-center md:hidden ">
        <div className="text-slate-900 font-bold m-4 border-2 border-slate-900 rounded-sm p-1">
          Nimrod
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
