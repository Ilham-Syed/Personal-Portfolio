import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ProfilePic.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ilham Syed
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Fourth Year Computer Science Student
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter "
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href="https://drive.google.com/file/d/1yDsBClSZFcFGSPqnoxbb2-7RBrJ0RtRh/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-grey-500 font-bold py-2 px-1 rounded border-b transition duration-300 hover:shadow-lg hover:bg-gray-900 sm:text-sm sm:mb-2"
            >
              View Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={profilePic}
              alt="profile picture"
              className="rounded-md rounded-tl-lg drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
