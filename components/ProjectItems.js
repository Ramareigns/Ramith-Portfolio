import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectItems = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative p-4 md:px-10 flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl group hover:bg-gradient-to-r from-purple-400 to-purple-800 ">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 font-bold text-white text-center">HTML & CSS</p>
        <div className="flex item-center justify-center gap-5 p-4 mb-5">
          <Link href={projectUrl}>
            <p className="text-center py-3  text-black font-bold text-lg rounded-full shadow-lg bg-purple-300 shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
