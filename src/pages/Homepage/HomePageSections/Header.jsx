import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import DonateNow from "../../../component/DonateNow";

const Header = ({
  slides,
  duration = 4500, // time each slide stays
  fadeDuration = 300, // fade transition speed
  opacity = 1, // final visible opacity
}) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const current = slides[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length); // change slide
        setFade(true); // fade-in new slide
      }, fadeDuration);
    }, duration);
    return () => clearInterval(interval);
  }, [slides, duration, fadeDuration]);

  return (
    <div
      style={{
        backgroundImage: `url(${current.BgImg})`,
        opacity: fade ? opacity : 0.7, // fade smoothly
        transition: `opacity ${fadeDuration}ms ease-in-out`,
      }}
      className="bg-cover bg-center bg-no-repeat mt-20 h-[550px] xl:h-screen max-h-[800px]"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="space-y-5 xl:w-[80%] py-16 lg:py-0 md:py-24 h-full flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-start font-black text-white uppercase">
            {current.MainText}
          </h1>
          <h2 className="text-white lg:w-[90%]">{current.SubText}</h2>
          <DonateNow className="ml-0"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
