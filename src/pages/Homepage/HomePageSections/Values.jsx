import React from "react";
import { CiHeart } from "react-icons/ci";

const Values = ({ cartData }) => {
  return (
    <div className="container py-20 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 ">
      {cartData?.map((item) => (
        <div
          key={item.key}
          className="space-y-5 flex flex-col items-center justify-center shadow-lg p-9 hover:bg-primary group duration-500 transition-colors"
        >
          <img src={item.img} alt={item.MainText} className="w-16 h-16" />

          <h1 className=" text-xl font-bold text-primary md:text-2xl text-center uppercase group-hover:text-white duration-500 transition-colors">
            {item.MainText}
          </h1>

          <p className="text-black w-[93%] text-center group-hover:text-white duration-500 transition-colors">{item.SubText}</p>
        </div>
      ))}
    </div>
  );
};

export default Values;
