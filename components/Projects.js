import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Bitcamp22 from "../public/CF-WebPage.gif";
import wImage from "../public/weather.png";
import game from "../public/2D-Game.gif";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  const projects = [1, 2, 3];
  return (
    <motion.div
      id="Projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-col max-w-full px-10 mb-64 mx-auto items-center"
    >
      {/* <div className="max-w-[1240px]  px-2 sm:mx-10 py-16 text-center"> */}
      <h2 className="py-5 ">Projects</h2>
      <p className="font-bold p-2 text-purple-800 uppercase">What I've Built</p>

      <div className="relative w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-5 snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-800/80">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44">
          <ProjectItems
            title="Class Finder"
            backgroundImg={Bitcamp22}
            projectUrl="/classfinder"
            code="HTML & CSS"
          />
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44">
          <ProjectItems
            title="Weather Webpage"
            backgroundImg={wImage}
            projectUrl="/weatherApp"
            code="Laravel & Tailwind CSS"
          />
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44">
          <ProjectItems
            title="2D Indie Game"
            backgroundImg={game}
            projectUrl="/birthdayGame"
            code="Unity & C#"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
