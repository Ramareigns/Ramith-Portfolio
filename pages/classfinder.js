import Image from "next/image";
import React from "react";
import cfImage from "../public/CF-WebPage.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const classfinder = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[60h] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cfImage}
          alt="/"
        />
        <div className="text-white p-2 z-10 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2 ">Class Finder</h2>
          <h3 className="">HTML / CSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col md:flex-row p-8">
        <div className="col-span-4 font-bold">
          <h2 className="py-2">Project</h2>
          <p className="py-4 text-xl">Overview</p>
          <p>
            Class Finder is a Website utilized for students in need of finding
            study areas around campus, mainly classrooms. The main premise being
            that through this website they can find out empty classrooms around
            the area with the respective times. They also get access to the
            option of reserving the classrooms beforehand for easy access. This
            Website was built by me and three other students during the
            Hackathon event. We mainly used HTML and CSS with a bit of
            understanding on Cockroach DB databases.
          </p>
          <a href="https://ramareigns.github.io/Website-Bitcam22/">
            <button className="px-8 py-2 mt-4 mr-8 text-white">Demo</button>
          </a>
          <a href="https://github.com/Ramareigns/Website-Bitcam22">
            <button className="px-8 py-2 mt-4 text-white">Code</button>
          </a>
        </div>
        <div className="col-span-4 mid:col-span-1 shadow-xl shadow-black rounded-xl p-4 m-10">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
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

export default classfinder;
