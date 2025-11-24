import React from "react";
import navLogo from "../assets/HomepageImgs/nablogoWhite.svg";
import FooterBg from "../assets/FooterBg.png";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const SocialPage = () => {
  const socialIcons = [
    {
      icon: <FaWhatsapp />,
      bgClass: "bg-white text-black",
      link: "https://wa.me/9909006502",
    },
    {
      icon: <FaInstagram />,
      bgClass: "bg-white text-black",
      link: "https://instagram.com/jouwpagina",
    },
    {
      icon: <FaFacebookF />,
      bgClass: "bg-white text-black",
      link: "https://www.facebook.com/blindschool.valsad",
    },
  ];

  const whatWeDo = [
    {
      id: 1,
      title: "Education & Skill Development",
      link: "/whatwedo#education-skill-development",
    },
    {
      id: 2,
      title: "Vocational Training",
      link: "/whatwedo#vocational-training",
    },
    {
      id: 3,
      title: "Accommodation, Food & Daily Care",
      link: "/whatwedo#accommodation-food-care",
    },
    {
      id: 4,
      title: "Healthcare & Medical Support",
      link: "/whatwedo#healthcare-medical-support",
    },
    {
      id: 5,
      title: "Community Outreach",
      link: "/whatwedo#community-outreach",
    },
    {
      id: 6,
      title: "Your Support Matters",
      link: "/whatwedo#your-support-matters",
    },
  ];

  const donateNow = [
    { label: "Donate your Time", route: "time" },
    { label: "Donate your Support", route: "  " },
    { label: "Donate in Kind", route: "kind" },
  ];

  const contactInfo = [
    {
      title: "Address",
      icon: <MdLocationOn className="text-5xl p-1 text-primary" />,
      details: "Behind Dutt nagar society, Civil Rd, Valsad, Gujarat 396001",
      links: ["https://maps.app.goo.gl/FDFgpoDMz22mgf7h9"],
    },
    {
      title: "Contact Numbers",
      icon: <MdPhone className="text-3xl text-primary" />,
      details: ["+91 9909006502", "(02632) 251459", "651164"],
      links: ["tel:+919909006502", "tel:02632251459", "tel:02632651164"],
    },
    {
      title: "Emails",
      icon: <MdEmail className="text-3xl text-primary" />,
      details: ["nabvalsad@gmail.com", "valsadnab@gmail.com"],
      links: ["mailto:nabvalsad@gmail.com", "mailto:valsadnab@gmail.com"],
      underline: true,
    },
  ];

  return (
    <footer
      style={{ backgroundImage: `url(${FooterBg})` }}
      className="bg-black text-white py-16 bg-cover bg-no-repeat bg-center overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 gap-y-8 container">

        {/* LEFT SECTION */}
        <div data-aos="fade-right" className="md:col-span-2 xl:col-span-1">
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
                <Link to={social.link}>{social.icon}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT WE DO */}
        <div data-aos="fade-right">
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
        <div data-aos="fade-right">
          <h3 className="font-bold text-lg mb-2 border-b pb-1 w-fit">
            Donate Now
          </h3>

          <ul className="space-y-2 text-sm">
            {donateNow.map((item) => (
              <li key={item.label} className="">
                <Link to={`/donatenow#${item.route}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT US */}
        <div data-aos="fade-right" className="md:col-span-2 xl:col-span-1">
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

                <div className="text-sm">
                  {Array.isArray(info.details) ? (
                    info.details.map((detail, i) => (
                      <div key={i}>
                        {info.links?.[i] ? (
                          <Link
                            to={info.links[i]}
                            className={`${info.underline ? "underline" : ""}`}
                          >
                            {detail}
                          </Link>
                        ) : (
                          <span>{detail}</span>
                        )}
                      </div>
                    ))
                  ) : info.links?.[0] ? (
                    <Link
                      to={info.links[0]}
                      className={`${info.underline ? "underline" : ""}`}
                    >
                      {info.details}
                    </Link>
                  ) : (
                    info.details
                  )}
                </div>
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
