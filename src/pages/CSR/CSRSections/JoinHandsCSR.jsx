import React from "react";
import JoinHandsImg from "../../../assets/CSRPageImgs/JoinHandsCSR.webp";
import BaseLine from "../../../component/BaseLine";

const JoinHandsCSR = () => {
  return (
    <section className="container space-y-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex items-center justify-center">
        <img src={JoinHandsImg} alt="" />
      </div>
      <div className="flex flex-col gap-6 items-start justify-center">
        <h1 className="font-bold text-start xl:w-[90%]">
          Join Hands with NAB Valsad to Continue a Legacy of Impact
        </h1>
        <p className="lg:w-[90%]">
          With over four decades of service, NAB Valsad stands as a beacon of
          trust, integrity, and unwavering dedication to empowering visually
          impaired individuals. Inspired by the vision of our beloved Late Shri
          Rajbhai, whose mission was to transform lives through opportunity and
          inclusion, we remain committed to carrying his legacy forward.
        </p>
        <BaseLine className="mr-auto" />
      </div>
    </section>
  );
};

export default JoinHandsCSR;
