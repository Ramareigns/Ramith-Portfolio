import Image from "next/image";
import React from "react";
import wImage from "../public/weather.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const weatherApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={wImage}
          alt="/"
        />
        <div className="text-white p-2 z-10 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2 ">Weather Webpage</h2>
          <h3 className="">Laravel/ Tailwind CSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col md:flex-row ">
        <div className="col-span-4 font-bold">
          <h2 className="py-2">Project</h2>
          <p className="py-4 text-xl">Overview</p>
          <p>
            I built a weather app webpage as a project in my employment at IBBR.
            The main purpose was to check the weather of the present day and the
            future days as well as other info. I used a weather API to get the
            raw weather data and used Laravel and tailwind css to code the page.
          </p>
          {/* <a href="https://ramareigns.github.io/Website-Bitcam22/">
            <button className="px-8 py-2 mt-4 mr-8 text-white">Demo</button>
          </a>
          <a href="https://github.com/Ramareigns/Website-Bitcam22">
            <button className="px-8 py-2 mt-4 text-white">Code</button>
          </a> */}
        </div>
        <div className="col-span-4 mid:col-span-1 shadow-xl shadow-black rounded-xl p-4 m-10">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Laravel
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
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

export default weatherApp;
