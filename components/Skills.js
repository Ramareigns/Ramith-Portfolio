import React from "react";
import Image from "next/image";
import pAuth from "../public/pauth.svg";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const Skills = ({ handleClick }) => {
  return (
    <motion.div
      id="Skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full md:h-screen p-2 flex items-center mb-64"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col text-center justify-center h-full ">
        <h2 className="py-4 tracking-widset">Skills</h2>
        <p className="font-bold p-4 text-purple-800 uppercase">What I Can Do</p>

        <motion.div
          // variants={fadeIn("up", 0.5)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.5 }}
          className="grid mt-5 grid-cols-2 md:grid-cols-4 gap-4 mx-auto"
        >
          <div className="p-8 shadow-xl rounded-full w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full  w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full  w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full  w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PHP</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full  w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>R</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full  w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Unity</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full  w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C#</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full  w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Laravel</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full  w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://docs.propelauth.com/favicon.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PropelAuth</h3>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-full w-[150px] h-[150px] md:h-[150px] md:w-[150px] bg-black/30 hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="flex flex-col p-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  width="50"
                  height="50"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
