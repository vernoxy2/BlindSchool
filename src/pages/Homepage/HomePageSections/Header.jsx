import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

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
      className="bg-cover bg-center bg-no-repeat mt-24 lg:h-screen max-h-[700px]"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="space-y-5 lg:w-[80%] py-16 lg:py-0 md:py-24 h-full flex flex-col items-start justify-center">
          <h1 className="text-start xl:text-6xl font-black text-white text-3xl uppercase">
            {current.MainText}
          </h1>
          <h2 className="text-white lg:w-[90%]">{current.SubText}</h2>
           <button className="rounded-full bg-primary font-bold text-white flex gap-2 px-8 py-3">
            <span className="text-2xl">
              <CiHeart />
            </span>
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
