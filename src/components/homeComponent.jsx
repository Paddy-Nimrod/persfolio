import React from "react";
import "../App.css";
import homeImage from "../assets/images/1.jpg";

import {
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiFormstack,
  SiNextdotjs,
} from "react-icons/si";

import { FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";

const HomeComponent = () => {
  return (
    <div className=" font-dinregular">
      <div className="home-container flex flex-col md:flex-row lg:flex-row py-4">
        <div className="text-white h-48 flex justify-center items-center md:flex-col p-4 my-5 top-3/4 md:top-1/4 lg:top-1/4 font-bold  md:w-1/2 lg:w-1/2 md:m-auto lg:m-auto ">
          <img
            src={homeImage}
            alt="web-design and development"
            className=" w-1/4 md:w-1/3 m-auto rounded-full outline outline-offset-4 outline-2"
          />
          <div className="flex flex-col ml-4 md:ml-0">
            <div className="font-normal text-xs m-1 md:text-xl lg:text-xl md:m-2 ">
              Nimrod Ambetsa ~{" "}
            </div>
            <div className="font-semibold text-xs md:text-lg lg:text-xl">
              <i>Full stack Developer</i>
            </div>
            <div className="text-xs md:text-lg font-semibold md:font-bold font-dinregular p-1 md:p-4">
              "Good software, like wine, takes time."
            </div>
          </div>
        </div>

        <div className=" text-white capitalize md:text-lg lg:text-lg top-1/4 md:w-1/3 lg:w-1/3 m-auto border border-3 rounded-md p-4">
          <div className="text-white my-2 font-semibold">
            <h2>Top Tech skills</h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-4 md:gap-4 lg:grid-cols-4 gap-4">
            <div className="hover:scale-150">
              <div className="flex items-center justify-center m-1">
                <FaJs />
              </div>
              <p className="text-sm">Javascript</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <FaReact />
              </div>
              <p className="text-sm">ReactJs</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <SiNextdotjs />
              </div>
              <p className="text-sm">NextJs</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <FaNodeJs />
              </div>
              <p className="text-sm">NodeJs</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <FaJava />
              </div>
              <p className="text-sm">Java</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <SiPostgresql />
              </div>
              <p className="text-sm">PostgreSQL</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <SiMysql />
              </div>
              <p className="text-sm">MySQL</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <SiMongodb />
              </div>
              <p className="text-sm">MongoDB</p>
            </div>

            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <SiTailwindcss />
              </div>
              <p className="text-sm">TailwindCSS</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <SiExpress />
              </div>
              <p className="text-sm">Express Js</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <SiSpringboot />
              </div>
              <p className="text-sm">Spring Boot</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <SiRedux />
              </div>
              <p className="text-sm">Redux</p>
            </div>
            <div className="hover:scale-150">
              <div className="flex justify-center items-center m-1">
                <SiFormstack />
              </div>
              <p className="text-sm">Formik</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
