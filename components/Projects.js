import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Bitcamp22 from "../public/CF-WebPage.gif";
import Bitcamp23 from "../public/Login.png";
import wImage from "../public/weather.png";
import game from "../public/2D-Game.gif";
import ProjectItems from "./ProjectItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projects = [1, 2, 3];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div
      id="Projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full md:h-screen p-2 mb-64 h-screen flex relative overflow-hidden flex-col text-lft md:flex-col max-w-full md:px-10 md:mb-64 mx-auto items-center"
    >
      <h2 className="py-5 ">Projects</h2>
      <p className="font-bold p-2 text-purple-800 uppercase">What I've Built</p>

      <div className="relative w-full mx-auto  md:p-5 z-20 text-xs md:text-xl">
        <Slider {...settings}>
          <div className="w-full flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-10 md:p-20 md:px-64">
            <ProjectItems
              title="Class Finder"
              backgroundImg={Bitcamp22}
              projectUrl="/classfinder"
              code="HTML & CSS"
            />
          </div>
          <div className="w-full flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-10 md:p-20 md:px-64">
            <ProjectItems
              title="Petsily"
              backgroundImg={Bitcamp23}
              projectUrl="/petsily"
              code="NextJS, JavaScript, HTML & Tailwind CSS"
            />
          </div>
          <div className="w-full flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-10 md:p-20 md:px-64">
            <ProjectItems
              title="Weather Webpage"
              backgroundImg={wImage}
              projectUrl="/weatherApp"
              code="Laravel & Tailwind CSS"
            />
          </div>
          <div className="w-full flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-10 md:p-20 md:px-64">
            <ProjectItems
              title="2D Indie Game"
              backgroundImg={game}
              projectUrl="/birthdayGame"
              code="Unity & C#"
            />
          </div>
        </Slider>
      </div>
    </motion.div>
  );
};

export default Projects;
