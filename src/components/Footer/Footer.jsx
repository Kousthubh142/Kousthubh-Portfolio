import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] relative">
      {/* Upside-down Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-[#2B2E1E]">Kousthubh N Gowda</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#7A6B5E] text-[#2B2E1E] text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            // { icon: <FaFacebook />, link: "https://leetcode.com/u/Kousthubh_N/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kousthubh-n-gowda-6698b02a9/" },
            { icon: <FaGithub />, link: "https://github.com/Kousthubh142" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/kousthubh_/" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#2B2E1E] hover:text-[#7A6B5E] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-[#4a4d3e] mt-6">
          © 2025 Kousthubh N Gowda. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
