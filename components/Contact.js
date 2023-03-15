import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="Contact" className="w-full lg:h-screen text-center">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h2 className="py-4 tracking-widset ">Contact</h2>
        <p className="font-bold p-4 text-purple-800 uppercase text-center">
          Get In Touch with Me
        </p>
        <div className="w-full  items-center justify-center flex">
          <div className=" max-w-[600px] shadow-xl shadow-black rounded-xl sm:p-8 p-2">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-4">Ramith Sanjith Wijesinghe</h2>
                <p className="py-4 font-bold">
                  I am avilable for any Interships or Full-Time positions.
                  Contact me so we can get in touch
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase font-bold">Connect with me!!</p>
                <div className="flex items-center justify-center py-4">
                  <a href="https://www.linkedin.com/in/ramith-wijesinghe-842bab180/">
                    <div className="rounded-full shadow-lg bg-white text-black mx-3  shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="https://github.com/Ramareigns">
                    <div className="rounded-full shadow-lg bg-white text-black mx-3 shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="mailto:rwijesin@terpmail.umd.edu">
                    <div className="rounded-full shadow-lg bg-white text-black mx-3 shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <a href="https://twitter.com/RamithWijesingh">
                    <div className="rounded-full shadow-lg bg-white text-black mx-3 shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                      <FaTwitter />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-span-3 w-full h-auto shadow-xl text-start  shadow-black rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-bold">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-bold">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-bold">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-bold">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-bold">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4 text-gray-100 font-bold mb-4">
                  Send Message
                </button>
              </form>
            </div>
          </div> */}
        </div>
        <div className="flex justify-center pb-10 pt-20">
          <Link href="/">
            <div className="rounded-full shadow-lg bg-white text-black shadow-black p-4 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
              <HiOutlineChevronDoubleUp className="" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
