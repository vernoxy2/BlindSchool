import React from "react";
import BgImg from "../../../assets/DonatePageImgs/WhyDonateBg.webp";
import BaseLine from "../../../component/BaseLine";

const WhyDonate = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="text-center  bg-center pt-20 pb-60 bg-no-repeat bg-cover "
    >
      <div className="container md:w-10/12 lg:w-8/12 space-y-5 border border-">
        <h1>Why Donate</h1>
        <p className="md:w-5/6 lg:w-4/5 mx-auto">
          NAB Valsad is a non-profit organization that offers free education,
          accommodation, food, healthcare, and vocational training to the
          differently-abled.
        </p>
        <p className="md:w-3/5 lg:w-2/4 mx-auto">
          We rely on donations from compassionate individuals and organizations
          like you every rupee you give goes directly toward improving lives.
        </p>
        <BaseLine/>
      </div>
    </section>
  );
};

export default WhyDonate;
