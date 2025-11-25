import React, { useState } from "react";
import navLogo from "../assets/HomepageImgs/NavLogo.svg";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import DonateNow from "./DonateNow";

const NavBar = () => {
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "What We Do", path: "/whatwedo" },
    { name: "CSR", path: "/csr" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md w-full py-2 flex items-center fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link to="/">
          <img src={navLogo} alt="navLogo" className="h-12 md:h-16" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-4 xl:gap-5">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className=" rounded-full cursor-pointer duration-300 transition-transform"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-primary duration-300 transition-colors py-2 px-5 xl:px-7 rounded-full ${
                    isActive
                      ? "text-primary bg-[#F4F4F4] font-bold duration-300"
                      : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Donate Button */}
        {/* <button
          className="hidden md:flex rounded-full bg-primary font-bold text-white gap-2 px-8 py-3"
          onClick={() => navigate("/donatenow")}
        >
          <span className="text-2xl">
            <CiHeart />
          </span>
          Donate Now
        </button> */}
        <DonateNow className="hidden lg:flex" />

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-4xl py-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-lg w-full absolute top-20 left-0 transition-all duration-300 overflow-hidden ${
          isOpen ? "h-fit" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-4 text-lg font-bold">
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
          <DonateNow onClick={() => setIsOpen(!isOpen)} />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
