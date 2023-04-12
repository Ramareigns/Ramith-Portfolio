import Image from "next/image";
import React from "react";
import Bitcamp23 from "../public/Home.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const birthdayGame = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[60vh] lg:h-[60vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[60vh] lg:h-[80h] bg-black/70 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={Bitcamp23}
          alt="/"
        />
        <div className="text-white p-2 z-10 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2 ">Petsily</h2>
          <h3 className="">NextJS, JavaScript, HTML & Tailwind CSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col md:flex-row ">
        <div className="col-span-4 font-bold">
          <h2 className="py-2">Project</h2>
          <p className="py-4 text-xl">Overview</p>
          <p>
            Petsily Short for Pets I Love You is a Social Media/Shopping Website
            for all our lovable Pets. We Have Instagram, Facebook, Twitter,
            Etc.. to show off our fashion and Lifestyle. So why not let our
            cuddly furry friends have a platform inclusive for themselves.
            Petsily gives you exactly that, A social media and Shopping Website
            for all animals. You can come in here, create account and browse
            through all your fur friends and see what they are up to. This
            website acts as both a social media App and a Online pet store where
            you can buy all your pet needs from medication to food and clothing
            supplies from trusted companies around the world. The Website also
            provides features like Online Chat where you can talk with fellow
            pet lovers and News & Facts where you can come to learn new things
            about your furry friends. Development - I Used Next.js framework to
            build this website with JavaScript, HTML and Tailwind CSS. I came
            with this Original Idea by myself.
          </p>
          {/* <a href="https://ramareigns.github.io/Website-Bitcam22/">
            <button className="px-8 py-2 mt-4 mr-8 text-white">Demo(Mac)</button>
          </a>
          <a href="https://ramareigns.github.io/Website-Bitcam22/">
            <button className="px-8 py-2 mt-4 mr-8 text-white">Demo(Windows)</button>
          </a>
          <a href="https://github.com/Ramareigns/Website-Bitcam22">
            <button className="px-8 py-2 mt-4 text-white">Code</button>
          </a> */}
        </div>
        <div className="col-span-4 mid:col-span-1 shadow-xl shadow-black rounded-xl p-4 m-10">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next JS FrameWork
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-20">
        <Link href="/#Projects">
          <p className="underline cursor-pointer font-bold">BACK</p>
        </Link>
      </div>
    </div>
  );
};

export default birthdayGame;
