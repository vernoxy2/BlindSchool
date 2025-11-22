import React from "react";
import Maskgroup from "../../../assets/HomepageImgs/OurImpact/Maskgroup.png";
import BaseLine from "../../../component/BaseLine";


const OurImpact = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Maskgroup})` }}
      className="text-start rounded-2xl m-2 py-10 bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="flex container">
        <div className=" w-3/12 space-y-3">
          <h1 className="text-white text-start">Our Impact</h1>
          <h2 className="text-white font-bold ">Quick, inspiring statistics</h2>
          <p className="w-[90%]">
            Empowering blind students through education, employment, and
            lifelong impact.
          </p>
        <BaseLine className="bg-white ms-0" />
        </div>
        {/* counter */}
        <div></div>
      </div>
    </section>
  );
};

export default OurImpact;
