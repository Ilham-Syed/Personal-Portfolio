import React from "react";
import { PUBLICATIONS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Publications = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Research Publications
      </motion.h1>

      <div className="flex flex-col items-center gap-8 px-4">
        {PUBLICATIONS.map((pub, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="w-full max-w-3xl rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <h3 className="mb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {pub.title}
            </h3>
            <p className="mb-1 text-sm text-neutral-400">{pub.authors}</p>
            <p className="mb-3 text-sm italic text-neutral-500">
              {pub.journal} &middot; {pub.year}
            </p>
            <p className="mb-4 text-neutral-300 leading-relaxed">
              {pub.description}
            </p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:from-cyan-500/30 hover:to-purple-500/30 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              View Paper
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Publications;