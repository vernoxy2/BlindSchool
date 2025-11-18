import React from "react";
import navLogo from "../assets/HomepageImgs/NavLogo.png";
import { CiHeart } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
const NavBar = () => {
    const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md w-full h-32 flex items-center">
      {/* Container */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={navLogo} alt="navLogo" className="h-20" />
        {/* Menu Items */}
        <ul className="hidden md:flex gap-20 text-lg">
          <li className="hover:text-blue-600 cursor-pointer font-bold"> <NavLink to="/">Home</NavLink></li>
          <li className="hover:text-blue-600 cursor-pointer font-bold"> <NavLink to="/about">About Us</NavLink>
            </li>
          <li className="hover:text-blue-600 cursor-pointer font-bold"> <NavLink to="/WhatWeDo">What We Do</NavLink> </li>
          <li className="hover:text-blue-600 cursor-pointer font-bold"> <NavLink to="/CSR"> CSR </NavLink></li>
          <li className="hover:text-blue-600 cursor-pointer font-bold"> <NavLink to="/Contact"> Contact Us </NavLink></li>
        </ul>

        {/* Donate Button (Right Side) */}
        <button className="rounded-full bg-primary font-bold text-white flex gap-2 px-8 py-3"
        onClick={() => navigate("/donate")}
        >
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
