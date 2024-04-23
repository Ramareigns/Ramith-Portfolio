import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import ProfilePic2 from "../public/ProfilePic2.png";

const About = () => {
  return (
    <motion.div
      id="About"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full md:h-screen p-2 flex items-center mb-64"
    >
      <div className="max-w-[1240px] m-auto ">
        <div className="w-full h-full mx-auto py-5 p-2 flex flex-col justify-center items-center">
          <h2 className="py-4">About Me</h2>
          <p className="font-bold p-4 text-purple-800 uppercase">What Am I</p>
        </div>
        <div className="px-5 gap-10 w-full h-full mx-auto p-2 flex flex-col md:flex-row text-center md:text-left justify-center items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              className="relative rounded-xl h-[200px] w-[150px] md:h-[425px] md:w-[1200px] mx-auto"
              src={ProfilePic2}
              alt=""
              width="600"
              height="600"
            />
          </motion.div>
          <div className="text-center md:mx-10 md:text-left">
            <p className="py-4 font-bold text-grey-500  mt-0 inline">
              I am an undergraduate student, currently pursuing a degree in
              Information Science and I am interested in the fields of Data
              Science, Data Analyst, Software Development, Web Development,
              Solution Specialist and Game Development. I am aspiring to have
              great achievements within my career and work hard to attain the
              goals I have set for myself.{" "}
              <span className="hidden md:block">
                Therefore, I am looking for Internships/job opportunities
                relating to the field of Information and Computer science in
                order to enhance my skills and gain experience.
              </span>
            </p>
            <div className="flex item-center justify-center mt-10 gap-5 p-4 mb-5">
              <Link
                href="Resume & Cover Letter- Ramith Wijesinghe.pdf"
                target="_blank"
              >
                <p className="text-center py-3  text-black font-bold text-lg rounded-full shadow-lg bg-purple-300 shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                  Cover Letter & Resume
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
