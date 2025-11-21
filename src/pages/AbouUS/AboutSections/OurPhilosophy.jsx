import React from "react";
import philosophy from "../../../assets/AboutUsImgs/Philosophy/philosophy.svg";
import BaseLine from "../../../component/BaseLine";

const OurPhilosophy = () => {
  return (
    <section className="text-center flex flex-col items-center">
      <h1>Our Philosophy</h1>
      <img src={philosophy} alt="philosophy" className="text-center " />
      <p className="text-xl font-bold max-w-2xl mb-6">
        We see ability where others <br /> see disability.
      </p>
      <BaseLine />
      <p className="max-w-2xl text-md">
        Our work is guided by the belief that everyone deserves opportunity,
        respect, and self-reliance regardless of physical challenges. Through
        education, empathy, and empowerment, we strive to create a world where
        every individual can live with dignity, confidence, and hope.
      </p>
    </section>
  );
};

export default OurPhilosophy;
