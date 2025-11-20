import React from "react";
import ImpactBg from "../../../assets/CSRPageImgs/ImpactBg.webp";
import BaseLine from "../../../component/BaseLine";

const Data = [
  "Expand vocational training programs for the visually impaired.",
  "Upgrade facilities such as computer labs and assistive technology centers.",
  "Reach more underserved individuals in remote areas.",
];
const ImpactMatters = () => {
  return (
    <section
      style={{ backgroundImage: `url(${ImpactBg})` }}
      className="text-center bg-no-repeat bg-cover  "
    >
      <div className="space-y-4">
        <h1 className="text-white">Your Impact Matters</h1>
        <h2 className="font-bold text-white">How We Make a Difference</h2>
        <BaseLine className="bg-white mx-auto" />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Data.map((item) => (
          <div
            key={item.id}
            className="shadow-md rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm bg-white/20 px-14 py-12 hover:scale-105 duration-300 transition-transform"
          >
            <div className="space-y-8">
              <h2 className="text-center text-white font-bold ">{item}</h2>
              <BaseLine className="bg-white w-[80%] mx-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactMatters;
