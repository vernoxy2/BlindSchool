import React from "react";
import Fest1 from "../../../assets/DonatePageImgs/Festivals/Fest1.webp";
import Fest2 from "../../../assets/DonatePageImgs/Festivals/Fest2.webp";
import Fest3 from "../../../assets/DonatePageImgs/Festivals/Fest3.webp";
import BaseLine from "../../../component/BaseLine";
import DonateNow from "../../../component/DonateNow";

const Data = [
  {
    id: 1,
    img: Fest1,
    title: "Sponsor a Festive Meal",
    sub: "Spread happiness by funding a special meal for our students during festivals.",
  },
  {
    id: 2,
    img: Fest2,
    title: "Sponsor a Festive Meal",
    sub: "Spread happiness by funding a special meal for our students during festivals.",
  },
  {
    id: 3,
    img: Fest3,
    title: "Sponsor a Festive Meal",
    sub: "Spread happiness by funding a special meal for our students during festivals.",
  },
];
const CelebrateFestivals = () => {
  return (
    <section className="container">
      <div className="text-start md:w-4/5 lg:w-2/3 xl:w-1/2 space-y-4">
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
          <div key={item.id} className="s rounded-lg">
            <div className="w-full">
              <img src={item.img} alt="" className="rounded-lg" />
            </div>
            <div className="py-6">
              <p className="text-start text-textcolor   flex gap-4 ">
                <span className="h-10 bg-primary p-0.5 flex flex-col my-auto rounded-lg"></span>{" "}
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-5 pt-5">
        <BaseLine />
        <h2 className="md:w-2/3 lg:w-1/2 text-center font-bold">
          Celebrate the joy of festivals with NAB Valsad and let your generosity
          light up lives.
        </h2>
        <DonateNow />
      </div>
    </section>
  );
};

export default CelebrateFestivals;
