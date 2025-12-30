import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className={`fixed z-50 w-full flex justify-center ${isScrolled ? "top-3" : "top-0"}`}>
      <div 
        className={`${
          isScrolled 
            ? "bg-[#2B2E1E]/80 backdrop-blur-md shadow-[0_7px_20px_rgba(43,46,30,0.3)] rounded-2xl px-12 md:px-16 lg:px-20" 
            : "bg-transparent w-full px-[7vw] md:px-[7vw] lg:px-[20vw]"
        }`}
      >
        <div className={`py-5 flex justify-between items-center gap-6 md:gap-20 ${isScrolled ? "text-[#EDE3D6]" : "text-[#2B2E1E]"}`}>
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer whitespace-nowrap">
          <span className={isScrolled ? "text-[#A9A89C]" : "text-[#7A6B5E]"}>&lt;</span>
          <span className={isScrolled ? "text-[#EDE3D6]" : "text-[#2B2E1E]"}>Kousthubh N</span>
          <span className={isScrolled ? "text-[#A9A89C]" : "text-[#7A6B5E]"}>/</span>
          <span className={isScrolled ? "text-[#EDE3D6]" : "text-[#2B2E1E]"}>Gowda</span>
          <span className={isScrolled ? "text-[#A9A89C]" : "text-[#7A6B5E]"}>&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-8 ${isScrolled ? "text-[#EDE3D6]" : "text-[#2B2E1E]"}`}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#7A6B5E] ${
                activeSection === item.id ? "text-[#7A6B5E] font-semibold" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className={`hidden md:flex space-x-4 ${isScrolled ? "text-[#EDE3D6]" : "text-[#2B2E1E]"}`}>
          <a
            href="https://github.com/Kousthubh142"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7A6B5E]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kousthubh-n-gowda-6698b02a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7A6B5E]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className={`md:hidden ${isScrolled ? "text-[#EDE3D6]" : "text-[#2B2E1E]"}`}>
          {isOpen ? (
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#F4EEE0] bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden border border-[#2B2E1E]">
          <ul className="flex flex-col items-center space-y-4 py-4 text-[#2B2E1E]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#7A6B5E] ${
                  activeSection === item.id ? "text-[#7A6B5E] font-semibold" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Kousthubh142"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B2E1E] hover:text-[#7A6B5E]"
              >
                <FaGithub size={24} />
              </a>
              <a
            href="https://www.linkedin.com/in/kousthubh-n-gowda-6698b02a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B2E1E] hover:text-[#7A6B5E]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
