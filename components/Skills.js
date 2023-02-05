import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="Skills" className="w-full lg:h-screen p-2 py-24">
      <div className="max-w-[1240px] mx-auto flex flex-col text-center justify-center h-full">
        <h2 className="py-4 tracking-widset">Skills</h2>
        <p className="font-bold p-4 text-purple-800 uppercase">What I Can Do</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="grid grid-cols-1 gap-4 justify-center iterms-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="grid grid-cols-1 gap-4 justify-center iterms-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="grid grid-cols-1 gap-4 justify-center iterms-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="grid grid-cols-1 gap-4 justify-center iterms-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="grid grid-cols-1 gap-4 justify-center iterms-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="grid grid-cols-1 gap-4 justify-center iterms-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/php.svg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PHP</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="grid grid-cols-1 gap-4 justify-center iterms-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/r.svg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>R</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="grid grid-cols-1 gap-4 justify-center iterms-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Unity</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-purple-300 ease-in duration-300">
            <div className="grid grid-cols-1 gap-4 justify-center iterms-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/laravel.svg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Laravel</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
