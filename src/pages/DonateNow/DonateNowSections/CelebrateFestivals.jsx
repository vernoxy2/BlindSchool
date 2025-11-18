import React from "react";
import Fest1 from "../../../assets/DonatePageImgs/Festivals/Fest1.webp";
import Fest2 from "../../../assets/DonatePageImgs/Festivals/Fest1.webp";
import Fest3 from "../../../assets/DonatePageImgs/Festivals/Fest1.webp";

const Data = [
  {
    id: 1,
    img: Fest1,
    title: "Sponsor a Festive Meal",
    sub: "Spread happiness by funding a special meal for our students during festivals.",
  },
  {
    id: 2,
    img: Fest1,
    title: "Sponsor a Festive Meal",
    sub: "Spread happiness by funding a special meal for our students during festivals.",
  },
  {
    id: 3,
    img: Fest1,
    title: "Sponsor a Festive Meal",
    sub: "Spread happiness by funding a special meal for our students during festivals.",
  },
];
const CelebrateFestivals = () => {
  return (
    <section className="container">
      <div className="text-start w-1/2  space-y-4">
        <h1 className="text-start pr-8">Celebrate Festivals with NAB Valsad</h1>
        <p>
          Make your festivals more meaningful by celebrating with NAB Valsad.
          Whether it's Diwali, Holi, Eid, Christmas, or any festive occasion,
          share your joy by contributing to a cause that transforms lives. Your
          donations can help provide meals, gifts, and essential services to
          visually impaired students.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Data.map((item) => (
          <div
            key={item.id}
            className="shadow-md rounded-lg hover:-translate-y-5 duration-300 transition-transform"
          >
            <div className="w-full">
              <img src={item.img} alt="" />
            </div>
            <div className="p-7 pt-12 relative space-y-3">
              <img src={item.icon} alt="" className="absolute -top-12 left-0" />
              <h2 className="text-start text-primary font-bold w-1/2 flex gap-4">
                <span className="h-10 bg-primary w-1 p-0.5 flex flex-col my-auto rounded-lg"></span>{" "}
                {item.name}
              </h2>

              <p className="text-start">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CelebrateFestivals;
