import React from "react";
import aboutImage from "../assets/download.gif";
import {motion} from "framer-motion";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl">About Me</motion.h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImage} alt="about image" className="rounded-2xl w-h-auto"/>
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1}}
        className="w-full lg:w-1/2 flex items-center">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6">
                    {ABOUT_TEXT}
                </p>
            </div>
          </motion.div>
      </div>
    </div>
  );
};

export default About;
