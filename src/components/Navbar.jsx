import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      setIsCompact(heroBottom <= 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      <div
        className={`mx-auto mt-3 flex items-center justify-between rounded-2xl border border-neutral-800/70 bg-neutral-950/70 backdrop-blur-md transition-all duration-300
        ${isCompact ? "max-w-4xl px-3 py-2" : "max-w-6xl px-4 py-3 md:px-6"}`}
      >
        <div className="flex flex-shrink-0 items-center">
          <img
            className={`transition-all duration-300 ${isCompact ? "w-12 md:w-14" : "w-16 md:w-20"}`}
            src={logo}
            alt="logo"
          />
        </div>

        <div
          className={`flex items-center gap-3 transition-all duration-300 ${
            isCompact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl md:gap-5"
          }`}
        >
          <a
            href="https://www.linkedin.com/in/ilham-syed-04b35721b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-neutral-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_16px_rgba(34,211,238,0.25)]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Ilham-Syed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-neutral-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_16px_rgba(34,211,238,0.25)]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/ilhamm_syed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-lg p-2 text-neutral-300 transition-all duration-300 hover:bg-pink-500/10 hover:text-pink-400 hover:shadow-[0_0_16px_rgba(244,114,182,0.25)]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://leetcode.com/u/ilhamsyed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="rounded-lg p-2 text-neutral-300 transition-all duration-300 hover:bg-yellow-500/10 hover:text-yellow-300 hover:shadow-[0_0_16px_rgba(250,204,21,0.25)]"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;