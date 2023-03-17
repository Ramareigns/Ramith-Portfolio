import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfilePic2 from "../public/ProfilePic2.jpg";

const About = () => {
  return (
    <div id="About" className="w-full md:h-screen p-2 flex items-center py-14">
      <div className="max-w-[1240px] m-auto ">
        <div className="w-full h-full mx-auto py-5 p-2 flex flex-col justify-center items-center">
          <h2 className="py-4">About Me</h2>
          <p className="font-bold p-4 text-purple-800 uppercase">What Am I</p>
        </div>
        <div className="px-5 w-full h-full mx-auto p-2 flex flex-col md:flex-row text-center md:text-left justify-center items-center">
          <div>
            <Image
              className="relative rounded-xl h-[128px] md:h-[640px] md:w-[320px] mx-auto mb-10"
              src={ProfilePic2}
              alt=""
              width="100"
              height="100"
            />
          </div>
          <div className="text-center md:text-left">
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
            <div className="flex item-center justify-center gap-5 p-4 mb-5">
              <Link
                href="Resume & Cover Letter- Ramith Wijesinghe.pdf"
                target="_blank"
              >
                <p className="text-center py-3  text-black font-bold text-lg rounded-full shadow-lg bg-purple-300 shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                  Resume
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
