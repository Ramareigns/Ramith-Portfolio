import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import ProfilePic1 from "../public/ProfilePic1.png";


const Main = () => {
  return (
    <div id="Main" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      {/* <div className = " flex absolute justify-center items-center hover:scale-125 ease-in duration-300">
        <div className=" rounded-full  border border-[#F7ABBA] opacity-10 h-80 w-80 animate-pulse "/>
      </div> */}
        <div className="mt-32 sm:mt-20 mx-10">
          <div>
            <Image className="relative rounded-full h-32 w-32 mx-auto mb-10" src={ProfilePic1} alt="" width="75" height="25"/>
          </div>
          <h2 className="py-4 ">
            Hi, I'm <span className="text-purple-700">Ramith Wijesinghe</span>
          </h2>

          <div className="py-4 font-bold text-xl md:text-3xl text-gray-500">
            <span>
              <Typewriter
                words={["Undergradute Student", "Programmer", "Web Developer"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            
          </div>
            
       
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
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
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
