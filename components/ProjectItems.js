import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const ProjectItems = ({ title, backgroundImg, projectUrl, code }) => {
  return (
    // <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10  transition:opacity duration-200 overflow-hidden">
      <div className="relative p-4 md:px-10 flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl group hover:bg-gradient-to-r from-purple-400 to-purple-800 ">
        <motion.div
          // initial={{
          //   y: -300,
          //   opacity: 0,
          // }}
          // transition={{ duration: 1.2 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
        >
          <Image
            className=" rounded-xl group-hover:opacity-10"
            src={backgroundImg}
            alt="/"
            width={700}
          />
        </motion.div>

        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="md:text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 font-bold text-white text-center">{code}</p>
          <div className="flex item-center justify-center gap-5  mb-5">
            <Link href={projectUrl}>
              <p className="text-center py-3 text-sm  text-black font-bold md:text-lg rounded-full shadow-lg bg-purple-300 shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                More Info
              </p>
            </Link>
          </div>
        </div>
      </div>
    // </article>
  );
};

export default ProjectItems;
