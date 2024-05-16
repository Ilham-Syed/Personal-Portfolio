import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20" src={logo} alt="logo" />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ilham-syed-04b35721b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Ilham-Syed" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/ilhamm_syed/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://leetcode.com/u/ilhamsyed/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
