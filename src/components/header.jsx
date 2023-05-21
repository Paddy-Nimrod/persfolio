import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="bg-white md:flex lg:flex h-16 z-10 absolute w-full px-2 font-dinregular">
      <div className="hidden md:flex lg:flex md:text-black lg:text-black items-center md:justify-between lg:justify-between">
        <div className="mx-4 p-2">
          <div className=" text-2xl font-semibold rounded-md border-black border-2 p-1">
            Nimrod
          </div>
        </div>
        <div className="">
          <ul className="flex items-center capitalize font-normal">
            <Link to="/">
              <li className="p-3 hover:underline hover:underline-offset-8">
                home
              </li>
            </Link>
            <Link to="/services">
              <li className="p-3 hover:underline hover:underline-offset-8">
                Services
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

        {/* <div>
          <ul className="flex items-center">
            <li className="p-4">
              <FaTwitter />
            </li>
            <li className="p-4">
              <FaGithub />
            </li>
            <li className="p-4">
              <FaLinkedin />
            </li>
          </ul>
        </div> */}
      </div>
      <div className="flex justify-start items-center md:hidden ">
        <div className="text-slate-900 font-bold m-4 border-2 border-slate-900 rounded-md p-1">
          Nimrod
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
