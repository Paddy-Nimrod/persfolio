import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="bg-white z-10 absolute w-full px-2 font-dinregular">
      <div className="hidden md:flex lg:flex md:text-white lg:text-white  md:justify-between lg:justify-between">
        <div>
          <ul className="flex items-center capitalize font-light">
            <Link to="/">
              <li className="p-2 hover:underline hover:underline-offset-8">
                home
              </li>
            </Link>
            <Link to="/services">
              <li className="p-2 hover:underline hover:underline-offset-8">
                Services
              </li>
            </Link>
            <Link to="/projects">
              <li className="p-2 hover:underline hover:underline-offset-8">
                Projects
              </li>
            </Link>
            <Link to="/contacts">
              <li className="p-2 hover:underline hover:underline-offset-8">
                contacts
              </li>
            </Link>
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
            <li className="p-4">
              <FaLinkedin />
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
