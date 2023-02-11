import Image from "next/image";
import React from "react";
import game from "../public/2D-Game.gif";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const birthdayGame = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[60vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] lg:h-[80h] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={game}
          alt="/"
        />
        <div className="text-white p-2 z-10 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2 ">2D Indie Game</h2>
          <h3 className="">Unity/ C#</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col md:flex-row ">
        <div className="col-span-4 font-bold">
          <h2 className="py-2">Project</h2>
          <p className="py-4 text-xl">Overview</p>
          <p>
            I built a simple 2D indie game using Unity game engine and C#. The
            reason I decided to develop a 2D game was to make one as a present for my
            Girlfriends birthday. I used customized sprites and pixelart made
            through Aseprite and world enviorenments. I also managesd to use
            customized sound effects.
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
                Unity
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                C#
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Aseprite
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
