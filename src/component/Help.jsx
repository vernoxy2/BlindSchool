import React from "react";
import HelpImg from "../assets/HomepageImgs/HelpImg.png";
import { CiHeart } from "react-icons/ci";
import DonateNow from "./DonateNow";

const Help = () => {
  return (
    <section
      style={{ backgroundImage: `url(${HelpImg})` }}
      className="bg-cover bg-center bg-no-repeat py-36"
    >
      <div className=" space-y-5 container">
        <h1 data-aos="fade-right" className="uppercase font-black md:text-start">
          Small help. <br /> Big hope
        </h1>
        <h2 data-aos="fade-right" className="font-bold text-center md:text-start">
          Be part of someone’s brighter <br /> tomorrow.
        </h2>
        <DonateNow />
      </div>
    </section>
  );
};
export default Help;
