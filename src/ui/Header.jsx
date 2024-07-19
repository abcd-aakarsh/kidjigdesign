import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <>
      <header className="max-w-full h-[80px]  mx-auto px-4 md:px-8 lg:px-[240px] bg-gradient-to-tr z-50 bg-black bg-opacity-5 backdrop-filter backdrop-blur-lg to-[#101C5C] flex items-center justify-between  text-white  fixed w-full shadow-md">
        <img src={logo} alt="logo" className="w-[87px]" />
        <nav className="space-x-7">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#process" className="hover:text-gray-400">
            Process
          </a>
          <a href="#work" className="hover:text-gray-400">
            Work
          </a>
          <a href="#pricing" className="hover:text-gray-400">
            Pricing
          </a>
          <a href="#faqs" className="hover:text-gray-400">
            FAQs
          </a>
        </nav>
        <button className="px-7 py-3 border border-[#6881FF] rounded-[12px]">
          Book a call
        </button>
      </header>
    </>
  );
};

export default Header;
