import React from "react";
import { CiHeart } from "react-icons/ci";

const Values = ({ cartData }) => {
  return (
    <section className="container space-y-0 2xl:w-11/12 py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
      {cartData?.map((item) => (
        <div
        data-aos="zoom-out"
          key={item.key}
          className="space-y-3 flex flex-col items-center justify-center shadow-lg p-10 hover:bg-primary group duration-500 transition-colors group"
        >
          <div className="relative w-16 h-16 group">
            <img
              src={item.img}
              alt={item.MainText}
              className="w-16 h-16 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            />
            <img
              src={item.hover}
              alt={item.MainText}
              className="w-16 h-16 absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          <h2 className="font-bold text-primary md:text-xl text-center uppercase group-hover:text-white duration-500 transition-colors">
            {item.MainText}
          </h2>
          <p className="text-black text-center group-hover:text-white duration-500 transition-colors">
            {item.SubText}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Values;
