import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const handleRepoRedirect = (repoUrl) => {
    window.open(repoUrl, "_blank");
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group h-[420px] [perspective:1000px]"
          >
            {/* Inner container that flips */}
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* ===== FRONT FACE ===== */}
              <div className="absolute inset-0 rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm overflow-hidden [backface-visibility:hidden]">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
                </div>

                {/* Title + hint */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-500 flex items-center gap-1">
                    <span className="inline-block w-4 h-[2px] bg-cyan-400 rounded" />
                    Hover to know more
                  </p>
                </div>

                {/* Subtle glow on bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              </div>

              {/* ===== BACK FACE ===== */}
              <div className="absolute inset-0 rounded-xl border border-purple-500/30 bg-neutral-950/95 backdrop-blur-md overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex flex-col justify-between h-full p-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-purple-500/10 border border-purple-500/25 px-3 py-1 text-xs font-medium text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub button */}
                  <button
                    onClick={() => handleRepoRedirect(project.repo)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-sm text-cyan-300 font-medium transition-all duration-300 hover:from-cyan-500/30 hover:to-purple-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:text-white"
                  >
                    <FaGithub className="text-base" />
                    View on GitHub
                    <FaExternalLinkAlt className="text-xs" />
                  </button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;