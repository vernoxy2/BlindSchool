import React, { useState } from "react";
import navLogo from "../assets/HomepageImgs/NavLogo.png";
import { CiHeart } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "What We Do", path: "/WhatWeDo" },
    { name: "CSR", path: "/CSR" },
    { name: "Contact Us", path: "/Contact" },
  ];

  return (
    <nav className="bg-white shadow-md w-full h-24 flex items-center fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between ">

        {/* Logo */}
        <img src={navLogo} alt="navLogo" className="h-16 md:h-20" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-16 text-lg font-bold">
          {menuItems.map((item) => (
            <li key={item.name} className="hover:text-blue-600 cursor-pointer">
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Donate Button */}
        <button
          className="hidden md:flex rounded-full bg-primary font-bold text-white gap-2 px-8 py-3"
          onClick={() => navigate("/donatenow")}
        >
          <span className="text-2xl">
            <CiHeart />
          </span>
          Donate Now
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg w-full absolute top-24 left-0 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg font-bold">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}

          {/* Mobile Donate Button */}
          <button
            className="rounded-full bg-primary font-bold text-white flex gap-2 px-8 py-3"
            onClick={() => {
              navigate("/donate");
              setIsOpen(false);
            }}
          >
            <span className="text-2xl">
              <CiHeart />
            </span>
            Donate Now
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
