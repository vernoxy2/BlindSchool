import React from "react";
import navLogo from "../assets/HomepageImgs/nablogoWhite.png";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const SocialPage = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 container">
        {/* LEFT SECTION */}
        <div>
          <img src={navLogo} alt="Logo" className="h-24 mb-5" />
          <p className="text-sm leading-relaxed max-w-xs">
            Empowering the blind through education, inclusion, and equal
            opportunities.
          </p>

          <h3 className="mt-6 font-semibold text-lg border-l-4 pl-3">
            Social Info
          </h3>

          <div className="flex gap-4 mt-4">
            <FaWhatsapp className="text-3xl bg-white text-black p-2 rounded-full" />
            <FaInstagram className="text-3xl bg-white text-black p-2 rounded-full" />
            <FaFacebookF className="text-3xl bg-white text-black p-2 rounded-full" />
          </div>
        </div>

        {/* OUR PAGES */}
        <div>
          <h3 className="font-bold text-lg mb-2 border-b pb-1 w-fit">
            Our Pages
          </h3>
          <ul className="space-y-2 text-sm">
            <li ><Link to="/Header"/>Home Page</li>
            <li>About Us Page</li>
            <li>What We Do</li>
            <li>CSR Page</li>
          </ul>
        </div>

        {/* WHAT WE DO */}
        <div>
          <h3 className="font-bold text-lg mb-2 border-b pb-1 w-fit">
            What we do
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Education & skill Development</li>
            <li>Vocational Training</li>
            <li>Accommodation, Food & Daily Care</li>
            <li>Healthcare & Medical Support</li>
            <li>Community Outreach</li>
            <li>Your Support Matters</li>
          </ul>
        </div>

        {/* DONATE NOW */}
        <div>
          <h3 className="font-bold text-lg mb-2 border-b pb-1 w-fit">
            Donate Now
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Donate your Time</li>
            <li>Donate your Suppprt</li>
            <li>Donate in Kind</li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="font-bold text-lg mb-2 border-b pb-1 w-fit">
            Contact Us
          </h3>

          {/* Address */}
          <div className="flex gap-5 mt-3 ">
            <div className="h-10 w-10 bg-white">
              <MdLocationOn className="text-4xl text-primary bg-white flex justify-center items-center" />
            </div>
            <div>
              <h2 className="font-bold text-[20px]">Address</h2>
              <p className="text-sm">
                Civil Hospital Road, Nanakwada, Valsad 396001 Gujarat (India)
              </p>
            </div>
          </div>

          {/* Contact Number */}
          <div className="flex gap-3 mt-4">
            <div className="h-10 w-10 bg-white">
              <MdPhone className="text-4xl  text-primary flex justify-center items-center" />
            </div>
            <div>
              <h2 className="font-bold text-[20px]">Contact Number</h2>
              <p className="text-sm">
                +91 9909006502 <br />
                (02632) 251459, 651164
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3 mt-4">
            <div className="h-10 w-10 bg-white">
              <MdEmail  className="text-4xl text-primary flex justify-center items-center" />
            </div>
            <div>
              <h2 className="font-bold text-[20px]">Email</h2>
              <p className="text-sm underline">
                nabvalsad@gmail.com <br />
                valsadnab@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-12 opacity-40" />

      {/* <p className="text-center text-xs opacity-70 mt-5">
        © {new Date().getFullYear()} NAB – All Rights Reserved.
      </p> */}
    </footer>
  );
};

export default SocialPage;
