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
    <section
      style={{
        backgroundImage: `url(${current.BgImg})`,
        opacity: fade ? opacity : 0.7, // fade smoothly
        transition: `opacity ${fadeDuration}ms ease-in-out`,
      }}
      className="py-60 bg-cover bg-center bg-no-repeat lg:h-screen max-h-[800px]"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-5 w-[80%]">
          <h1 className="text-start xl:text-6xl font-black text-white text-3xl uppercase">
            {current.MainText}
          </h1>
          <p className="text-white text-2xl w-[90%]">{current.SubText}</p>
           <button className="rounded-full bg-primary font-bold text-white flex gap-2 px-8 py-3">
            <span className="text-2xl">
              <CiHeart />
            </span>
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
