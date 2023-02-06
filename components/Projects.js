import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Bitcamp22 from "../public/CF-WebPage.gif";
import wImage from "../public/weather.png";
import game from "../public/2D-Game1.gif";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id="Projects" className="w-full flex justify-center py-24">
      <div className="max-w-[1240px]  px-2 sm:mx-10 py-16 text-center">
        <h2 className="py-4">Projects</h2>
        <p className="font-bold p-4 text-purple-800 uppercase">
          What I've Built
        </p>
        <div className="grid md:grid-col-2 gap-8">
          <ProjectItems
            title="Class Finder"
            backgroundImg={Bitcamp22}
            projectUrl="/classfinder"
            code = "HTML & CSS"
          />
          <ProjectItems
            title="Weather Webpage"
            backgroundImg={wImage}
            projectUrl="/weatherApp"
            code = "Laravel & Tailwind CSS"
          />
          <ProjectItems
            title="2D Indie Game"
            backgroundImg={game}
            projectUrl="/birthdayGame"
            code = "Unity & C#"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
