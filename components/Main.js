import React, { useState, useEffect } from "react";
import Link from "next/link";
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

const Main = () => {
  const [nav, setNav] = useState(false);
  const [linkColor, setLinkColor] = useState("#1f2937");
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
           viewport={{ once: false, amount: 0.5 }}>
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

          {/* <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <a
              href="https://www.linkedin.com/in/ramith-wijesinghe-842bab180/"
              target="_blank"
            >
              <div className="rounded-full shadow-lg bg-white text-black shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-gray-500 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/Ramareigns" target="_blank">
              <div className="rounded-full shadow-lg bg-white text-black shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-gray-500  ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:rwijesin@terpmail.umd.edu" target="_blank">
              <div className="rounded-full shadow-lg bg-white text-black shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-gray-500  ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a href="https://twitter.com/RamithWijesingh" target="_blank">
              <div className="rounded-full shadow-lg bg-white text-black shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-gray-500  ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
          </div> */}
        </div>
      </div>
      <nav className="fixed bottom-4 mx-auto lg:bottom-8 z-50 w-full overflow-hidden">
        <div className="container mx-auto ">
          {/* <ul style={{ color: `${linkColor}` }} className="hidden md:flex"> */}
          <div className="bg-black/20 w-full  backdrop-blur-3xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl ">
            <Link
              href="/#Main"
              smooth={true}
    
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90  active:bg-white active:rounded-full  "
            >
              <BiHomeAlt />
            </Link>
            <Link
              href="/#About"
              smooth={true}
             
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90 active:bg-white active:rounded-full  "
            >
              <BsFillPersonFill />
            </Link>
            <Link
              href="/#Work"
              smooth={true}
             
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90 active:bg-white active:rounded-full  "
            >
              <BsBriefcase />
            </Link>
            <Link
              href="/#Skills"
              smooth={true}
             
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90 active:bg-white active:rounded-full  "
            >
              <BsFillLightningChargeFill />
            </Link>
            <Link
              href="/#Projects"
              smooth={true}
            
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-purple-800 text-white/90 active:bg-white active:rounded-full  "
            >
              <BsClipboardData />
            </Link>
            <Link
              href="/#Contact"
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
