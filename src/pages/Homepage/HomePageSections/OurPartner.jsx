import React from "react";
import NCR from "../../../assets/HomepageImgs/OurParners/NCR.svg";
import SAXO from "../../../assets/HomepageImgs/OurParners/SAXO.svg";
import IndianOil from "../../../assets/HomepageImgs/OurParners/IndianOil.svg";
import SBI from "../../../assets/HomepageImgs/OurParners/SBI.svg";
import NTPC from "../../../assets/HomepageImgs/OurParners/NTPC.svg";
import UnionBank from "../../../assets/HomepageImgs/OurParners/UnionBank.svg";
import BaseLine from "../../../component/BaseLine";

const OurPartner = () => {
  const logos = [
    { id: "NCR", src: NCR },
    { id: "SAXO ", src: SAXO },
    { id: "IndianOil", src: IndianOil },
    { id: "SBI", src: SBI },
    { id: "Ntpc", src: NTPC },
    { id: "UnionBank", src: UnionBank },
  ];

  return (
    <section className="container py-10 px-0 ">
      <div className="container space-y-4">
        <h1>Our Partners</h1>
        <h2 className="font-bold text-center">
          We are happy to collaborate with our partners
        </h2>
        <p className="text-center mb-6">
          Join NAB Delhi’s mission with partners like GAIL, AON, Fena
          Foundation,
          <br className="hidden md:block" />
          and Inner Wheel to empower and uplift the visually impaired.
        </p>
        <BaseLine className="mx-auto" />
      </div>

      <div className="overflow-hidden whitespace-nowrap py-6 px-0 relative scrollbar-hide">
        <div className="logo-slider">
          {/* Duplicate logos to make infinite loop */}
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={logo.id + i}
              src={logo.src}
              alt={logo.id}
              className="h-14 mx-10 inline-block"
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default OurPartner;
