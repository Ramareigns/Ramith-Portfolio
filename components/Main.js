import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsFillPersonFill,
  BsFillLightningChargeFill,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import { Typewriter } from "react-simple-typewriter";
import ProfilePic1 from "../public/ProfilePic1.png";
import Robot from "../public/HiRobot.gif";
import { animateScroll as scroll, Link } from "react-scroll";

const Main = () => {
  const [nav, setNav] = useState(false);
  const [linkColor, setLinkColor] = useState("#1f2937");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const aboutSection = document.getElementById("About");
      const skillsSection = document.getElementById("Skills");
      const projectsSection = document.getElementById("Projects");
      const contactSection = document.getElementById("Contact");

      if (
        currentScrollY < aboutSection.offsetTop - 200 ||
        currentScrollY > contactSection.offsetTop + 200
      ) {
        setLinkColor("#1f2937");
      } else if (
        currentScrollY >= aboutSection.offsetTop - 200 &&
        currentScrollY < skillsSection.offsetTop - 200
      ) {
        setLinkColor("#8B5CF6");
      } else if (
        currentScrollY >= skillsSection.offsetTop - 200 &&
        currentScrollY < projectsSection.offsetTop - 200
      ) {
        setLinkColor("#06B6D4");
      } else if (currentScrollY >= projectsSection.offsetTop - 200) {
        setLinkColor("#EF4444");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
    scroll.scrollToTop();
  };
  return (
    <div id="Main" className="w-full h-screen text-center ">
      {/* <div className="p-2 ">
      <Image src={Robot} alt="/" width="75" height="25" />
      </div> */}
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        {/* <div className = " flex absolute justify-center items-center hover:scale-125 ease-in duration-300">
        <div className=" rounded-full  border border-[#F7ABBA] opacity-10 h-80 w-80 animate-pulse "/>
      </div> */}
        <div className="mx-10">
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Image
              className="relative rounded-full h-[300px]] w-[200px] md:h-[250px] md:w-[250px] mx-auto mb-10"
              src={ProfilePic1}
              alt=""
              width="600"
              height="600"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
          >
            <h2 className="py-4 ">
              <span className="text-purple-700">Ramith Wijesinghe</span>
            </h2>

            <div className="py-4 font-bold text-xl md:text-3xl text-gray-500">
              <span className="text-white mr-4">I am a</span>
              <span>
                <Typewriter
                  words={[
                    "Undergradute Student",
                    "Programmer",
                    "Web Developer",
                    "Data Analyst",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <nav className="fixed bottom-4 mx-auto lg:bottom-8 z-50 w-full overflow-hidden">
        <div className="container mx-auto ">
          {/* <ul style={{ color: `${linkColor}` }} className="hidden md:flex"> */}
          <div className="bg-black/20 w-full  backdrop-blur-3xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl ">
            <Link
              to="Main"
              smooth={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90  active:bg-white active:rounded-full  "
            >
              <BiHomeAlt />
            </Link>
            <Link
              to="About"
              smooth={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90 active:bg-white active:rounded-full  "
            >
              <BsFillPersonFill />
            </Link>
            <Link
              to="Work"
              smooth={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90 active:bg-white active:rounded-full  "
            >
              <BsBriefcase />
            </Link>
            <Link
              to="Skills"
              smooth={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90 active:bg-white active:rounded-full  "
            >
              <BsFillLightningChargeFill />
            </Link>
            <Link
              to="Projects"
              smooth={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90 active:bg-white active:rounded-full  "
            >
              <BsClipboardData />
            </Link>
            <Link
              to="Contact"
              smooth={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90 active:bg-white active:rounded-full  "
            >
              <BsChatSquare />
            </Link>
          </div>
          {/* </ul> */}
        </div>
      </nav>
    </div>
  );
};

export default Main;
