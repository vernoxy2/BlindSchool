import React from "react";
import dreamsociety from "../../../assets/CSRPageImgs/dreamsociety.png";

const DreamOfSociety = () => {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="shadow-lg rounded-2xl py-20 lg:py-0 lg:h-[60%] my-auto flex items-center justify-center order-2 lg:order-1">
        <h2 className=" text-textcolor w-[75%] lg:w-[87%] xl:w-[75%] text-center text-xl lg:text-lg xl:text-2xl ">
          Join us in honoring Late <span className="font-bold">Shri Rambhai's dream of a society</span> where every
          visually impaired individual can live with dignity and independence.
          Contact us today to become a valued partner in our mission to create a
          brighter, more inclusive future.
        </h2>
      </div>
      <div className="order-1 lg:order-2">
        <img src={dreamsociety} alt="" />
      </div>
    </section>
  );
};

export default DreamOfSociety;
