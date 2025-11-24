import React from "react";
import navLogo from "../assets/HomepageImgs/nablogoWhite.svg";
import FooterBg from "../assets/FooterBg.png";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const SocialPage = () => {
  const socialIcons = [
    { icon: <FaWhatsapp />, bgClass: "bg-white text-black" },
    { icon: <FaInstagram />, bgClass: "bg-white text-black" },
    { icon: <FaFacebookF />, bgClass: "bg-white text-black" },
  ];

  // const ourPages = [
  //   { name: "Home Page", path: "/" },
  //   { name: "About Us Page", path: "/About" },
  //   { name: "What We Do", path: "/WhatWeDo" },
  //   { name: "CSR Page", path: "/CSR" },
  // ];

  const whatWeDo = [
  {
    id: 1,
    title: "Education & Skill Development",
    link: "/whatwedo/education-skill-development"
  },
  {
    id: 2,
    title: "Vocational Training",
    link: "/whatwedo/vocational-training"
  },
  {
    id: 3,
    title: "Accommodation, Food & Daily Care",
    link: "/whatwedo/accommodation-food-care"
  },
  {
    id: 4,
    title: "Healthcare & Medical Support",
    link: "/whatwedo/healthcare-medical-support"
  },
  {
    id: 5,
    title: "Community Outreach",
    link: "/whatwedo/community-outreach"
  },
  {
    id: 6,
    title: "Your Support Matters",
    link: "/whatwedo/your-support-matters"
  }
];


  const donateNow = ["Donate your Time", "Donate your Support", "Donate in Kind"];

  const contactInfo = [
    {
      title: "Address",
      icon: <MdLocationOn className="text-5xl p-1 text-primary" />,
      details: "Civil Hospital Road, Nanakwada, Valsad 396001 Gujarat (India)",
    },
    {
      title: "Contact Number",
      icon: <MdPhone className="text-3xl text-primary" />,
      details: "+91 9909006502 \n(02632) 251459, 651164",
    },
    {
      title: "Email",
      icon: <MdEmail className="text-3xl text-primary" />,
      details: "nabvalsad@gmail.com \nvalsadnab@gmail.com",
      underline: true,
    },
  ];

  return (
    <footer style={{ backgroundImage: `url(${FooterBg})` }} className="bg-black text-white py-16 bg-cover bg-no-repeat bg-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 gap-y-8 container">
        {/* LEFT SECTION */}
        <div className="md:col-span-2 xl:col-span-1">
          <img src={navLogo} alt="Logo" className="h-24 mb-5" />
          <p className="text-sm leading-relaxed w-2/3 xl:max-w-60">
            Empowering the blind through education, inclusion, and equal
            opportunities.
          </p>

          <h3 className="mt-6 font-semibold text-lg border-l-4 pl-3">
            Social Info
          </h3>

          <div className="flex gap-2 md:gap-4 mt-4">
            {socialIcons.map((social, index) => (
              <div
                key={index}
                className={` text-lg md:text-3xl ${social.bgClass} p-2 rounded-full`}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>

        {/* OUR PAGES */}
        {/* <div>
          <h3 className="font-bold text-lg mb-2 border-b pb-1 w-fit">
            Our Pages
          </h3>
          <ul className="space-y-2 text-sm">
            {ourPages.map((page, index) => (
              <li key={index}>
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* WHAT WE DO */}
        <div>
  <h3 className="font-bold text-lg mb-2 border-b pb-1 w-fit">
    What we do
  </h3>
  <ul className="space-y-2 text-sm">
    {whatWeDo.map((item) => (
      <li key={item.id} className="active:font-bold">
        <Link to={item.link}>{item.title}</Link>
      </li>
    ))}
  </ul>
</div>


        {/* DONATE NOW */}
        <div >
          <h3 className="font-bold text-lg mb-2 border-b pb-1 w-fit">
            Donate Now
          </h3>
          <ul className="space-y-2 text-sm">
            {donateNow.map((item, index) => (
              <li key={index} className="active:font-bold">{item}</li>
            ))}
          </ul>
        </div>

        {/* CONTACT US */}
        <div className="md:col-span-2 xl:col-span-1">
          <h3 className="font-bold text-lg mb-2 border-b pb-1 w-fit">
            Contact Us
          </h3>

          {contactInfo.map((info, index) => (
            <div className="flex gap-3 mt-4" key={index}>
              <div className="h-12 w-12 bg-white text-primary rounded-md flex justify-center items-center">
                {info.icon}
              </div>
              <div>
                <h2 className="font-bold text-[20px]">{info.title}</h2>
                <p className={`text-sm ${info.underline ? "underline" : ""}`}>
                  {info.details.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-12 opacity-40" />
    </footer>
  );
};

export default SocialPage;
