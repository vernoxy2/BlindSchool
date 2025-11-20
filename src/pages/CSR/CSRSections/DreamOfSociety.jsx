import React from "react";
import dreamsociety from "../../../assets/CSRPageImgs/dreamsociety.png";

const DreamOfSociety = () => {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="shadow-lg rounded-2xl py-20 lg:py-0 lg:h-[60%] my-auto flex items-center justify-center">
        <h2 className=" text-textcolor w-[70%] text-center">
          Join us in honoring Late <span className="font-bold">Shri Rambhai's dream of a society</span> where every
          visually impaired individual can live with dignity and independence.
          Contact us today to become a valued partner in our mission to create a
          brighter, more inclusive future.
        </h2>
      </div>
      <div>
        <img src={dreamsociety} alt="" />
      </div>
    </section>
  );
};

export default DreamOfSociety;
