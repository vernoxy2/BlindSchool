import React from "react";
import navLogo from "../assets/HomepageImgs/NavLogo.png";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import Header from "../pages/Homepage/HomePageSections/Header";
import About from "../pages/Homepage/HomePageSections/AboutUs";
import Help from "../pages/Homepage/HomePageSections/Help"; 
import Head from "../pages/AbouUS/AboutSections/Head";
import WhatWeDoHead from "../pages/WhatWeDo/WhatWeDoSections/WhatWeDoHead";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md w-full h-32 flex items-center">
      {/* Container */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={navLogo} alt="navLogo" className="h-20" />
        {/* Menu Items */}
        <ul className="hidden md:flex gap-20 text-lg">
          <li className="hover:text-blue-600 cursor-pointer font-bold"> <NavLink to="/">Home</NavLink></li>
          <li className="hover:text-blue-600 cursor-pointer font-bold"> <NavLink to="/AboutHead">About Us</NavLink>
            </li>
          <li className="hover:text-blue-600 cursor-pointer font-bold"> <NavLink to="/WhatHead">What We Do</NavLink> </li>
          <li className="hover:text-blue-600 cursor-pointer font-bold">CSR</li>
          <li className="hover:text-blue-600 cursor-pointer font-bold">Contact Us</li>
        </ul>

        {/* Donate Button (Right Side) */}
        <button className="rounded-full bg-primary font-bold text-white flex gap-2 px-8 py-3">
          <span className="text-2xl">
            <CiHeart />
          </span>
          Donate Now 
        </button>

      </div>
    </nav>
  );
};

export default NavBar;
