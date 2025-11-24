import React from "react";
import svg1 from "../../../assets/CSRPageImgs/Group 120.svg";
import svg2 from "../../../assets/CSRPageImgs/Group 116.svg";
import svg3 from "../../../assets/CSRPageImgs/Group 117.svg";
import svg4 from "../../../assets/CSRPageImgs/Group 118.svg";

const Data = [
  {
    id: 1,
    img: svg1,
    title: "Financial Contributions",
    subtext: "Help us expand services and facilities.",
  },
  {
    id: 2,
    img: svg2,
    title: "Program Sponsorship",
    subtext: "Support vocational training,sports events, or workshops.",
  },
  {
    id: 3,
    img: svg3,
    title: "In-Kind Donations",
    subtext: " Provide equipment, assistive technology, or learning resources.",
  },
  {
    id: 4,
    img: svg4,
    title: "Volunteer Engagement",
    subtext: "Involve your team in meaningful activities that impact lives.",
  },
];

const MakeDiff = () => {
  return (
    <section className="text-center container">
      <h1 data-aos="fade-up">
        Ways to Make a <br /> Difference
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {Data.map((item) => (
          <div
          data-aos="zoom-in"
            key={item.id}
            className="shadow-md rounded-lg group py-8 hover:bg-primary duration-300 transition-colors "
          >
            <div className=" bg-white flex w-fit mx-auto rounded-full">
              <img src={item.img} alt="" />
            </div>
            <div className="  relative space-y-3 text-center">
              <img src={item.icon} alt="" className="absolute -top-12 left-0" />
              <h2 className="mx-auto text-primary group-hover:text-white duration-200 transition-colors font-bold w-1/2 ">
                {item.title}
              </h2>

              <p className="w-4/5 mx-auto group-hover:text-white duration-200 transition-colors">
                {item.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MakeDiff;
