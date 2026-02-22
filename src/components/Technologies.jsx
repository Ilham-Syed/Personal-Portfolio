//rafce
import React from "react";
import { RiFlutterFill } from "react-icons/ri";
import { SiMongodb, SiSpringboot, SiApachekafka, SiRedis } from "react-icons/si";
import { FaPython, FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { icon: <FaPython className="text-7xl text-yellow-400" />, name: "Python", duration: 2.5 },
  { icon: <RiFlutterFill className="text-7xl text-cyan-400" />, name: "Flutter", duration: 3 },
  { icon: <SiSpringboot className="text-7xl text-green-500" />, name: "Spring Boot", duration: 3.5 },
  { icon: <SiApachekafka className="text-7xl text-white" />, name: "Kafka", duration: 4 },
  { icon: <SiRedis className="text-7xl text-red-500" />, name: "Redis", duration: 4.5 },
  { icon: <SiMongodb className="text-7xl text-green-400" />, name: "MongoDB", duration: 5 },
  { icon: <BiLogoPostgresql className="text-7xl text-blue-400" />, name: "PostgreSQL", duration: 3.5 },
  { icon: <FaDocker className="text-7xl text-blue-500" />, name: "Docker", duration: 3 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:border-neutral-600"
          >
            {tech.icon}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-sm text-neutral-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;