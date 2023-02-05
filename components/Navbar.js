import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import Robot from "../public/HiRobot.gif";
import { useRouter } from "next/router";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/classfinder") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
        <Link href="/">
          <Image src={Robot} alt="/" width="75" height="25" />
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm font-bold text-purple-500 uppercase hover:border-b hover:text-purple-800 border-black">
                Home
              </li>
            </Link>
            <Link href="/#Work">
              <li className="ml-10 text-sm font-bold text-purple-500 uppercase hover:border-b hover:text-purple-800 border-black">
                Work
              </li>
            </Link>
            <Link href="/#Skills">
              <li className="ml-10 text-sm font-bold text-purple-500 uppercase hover:border-b hover:text-purple-800 border-black">
                Skills
              </li>
            </Link>
            <Link href="/#Projects">
              <li className="ml-10 text-sm font-bold text-purple-500 uppercase hover:border-b hover:text-purple-800 border-black">
                Projects
              </li>
            </Link>
            <Link href="Resume & Cover Letter- Ramith Wijesinghe.pdf" target="_blank">
              <li className="ml-10 text-sm font-bold text-purple-500 uppercase hover:border-b hover:text-purple-800 border-black">
                Resume
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-yellow-200 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={Robot} width="55" height="25" alt="/" />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-black p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-700 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4">
                Welcome to my Portfolio Webpage!!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col ">
            <ul className="uppercase font-bold ">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#Work">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Work
                </li>
              </Link>
              <Link href="/#Skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#Projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#Contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <Link href="Resume & Cover Letter- Ramith Wijesinghe.pdf" target="_blank">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase font-bold tracking-widest text-purple-700">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://www.linkedin.com/in/ramith-wijesinghe-842bab180/" target="_blank">
                  <div className="rounded-full shadow-lg bg-purple-300 shadow-black p-3 cursor-pointer hover:scale-105 hover:bg-white ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/Ramareigns" target="_blank">
                  <div className="rounded-full shadow-lg bg-purple-300 shadow-black p-3 cursor-pointer hover:scale-105 hover:bg-white ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href="mailto:rwijesin@terpmail.umd.edu" target="_blank">
                  <div className="rounded-full shadow-lg bg-purple-300 shadow-black p-3 cursor-pointer hover:scale-105 hover:bg-white ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
                <a href="https://twitter.com/RamithWijesingh" target="_blank">
                  <div className="rounded-full shadow-lg bg-purple-300 shadow-black p-3 cursor-pointer hover:scale-105 hover:bg-white ease-in duration-300">
                    <FaTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
