import Image from "next/image";
import React from "react";
import pfmImage from "../public/pfm.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const projectFM = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pfmImage}
          alt="/"
        />
        <div className="text-white p-2 z-10 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2 ">ProjectFM</h2>
          <h3 className="">NextJS, JavaScript, HTML, Tailwind CSS and PropelAuth</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col md:flex-row ">
        <div className="col-span-4 font-bold">
          <h2 className="py-2">Project</h2>
          <p className="py-4 text-xl">Overview</p>
          <p>
          ProjectFM is a cutting-edge platform that seamlessly integrates housing and climate data, 
          simplifying the decision-making process for finding the perfect place to call home. 
          Leveraging Next.js, PropelAuth, JavaScript, HTML, Tailwind CSS, and Python, it delivers a 
          user-friendly experience where users can explore housing affordability, climate suitability, 
          and other factors within a single interface.
        </p>
        <p>
          Despite challenges such as integrating multiple APIs and optimizing performance, 
          the team successfully created a cohesive platform. Their accomplishments include implementing a 
          user-friendly interface, prioritizing data security, and receiving positive feedback. Moving forward,
           ProjectFM aims to enhance personalized housing recommendations, introduce additional data sources, 
           and continuously refine the user experience to become the go-to destination for informed housing decisions.
          </p>
          <a href="https://projectfm.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8 text-white">Demo</button>
          </a>
          <a href="https://github.com/Ramareigns/BitCamp-24">
            <button className="px-8 py-2 mt-4 text-white">Code</button>
          </a>
        </div>
        <div className="col-span-4 mid:col-span-1 bg-gray-400 shadow-xl shadow-black rounded-xl p-4 m-5">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
            <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next JS FrameWork
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                PropelAuth User Authentication
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-20">
        <Link href="/#Projects">
          <p className="underline cursor-pointer font-bold">BACK</p>
        </Link>
      </div>
    </div>
  );
};

export default projectFM;
