import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Bitcamp22 from "../public/CF-WebPage.gif";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id="Projects" className="w-full flex justify-center py-48">
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
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
