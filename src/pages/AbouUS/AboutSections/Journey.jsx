import React from "react";
import Img1980 from "../../../assets/AboutUsImgs/OurJourneyImgs/1980.png";
import Img1990 from "../../../assets/AboutUsImgs/OurJourneyImgs/1980.png";
import Img2000 from "../../../assets/AboutUsImgs/OurJourneyImgs/2000.png";
import Img2010 from "../../../assets/AboutUsImgs/OurJourneyImgs/2010.png";
import Img2020 from "../../../assets/AboutUsImgs/OurJourneyImgs/2020.png";
import BaseLine from "../../../component/BaseLine";

const TimeLine = [
  {
    decade: "1980s",
    title: "The Beginning of a Vision",
    desc: "NAB Valsad offered vocational training, empowering visually challenged individuals across South Gujarat with community support.",
    img: Img1980,
  },
  {
    decade: "1990s",
    title: "Laying the Foundation",
    desc: "NAB Valsad started vocational training in typing, weaving, and telephone operation, empowering village students and gaining recognition.",
    img: Img1990,
  },
  {
    decade: "2000s",
    title: "Expanding Horizons",
    desc: "In 1984, Shri Ramubhai K. Patel founded NAB Valsad to empower visually challenged individuals through education and dignity.",
    img: Img2000,
  },
  {
    decade: "2010s",
    title: "Strengthening Education & Outreach",
    desc: "We integrated blind students, partnered with schools, supported higher education, and expanded outreach to rural visually impaired.",
    img: Img2010,
  },
  {
    decade: "2020s",
    title: "Moving Toward a Brighter Future",
    desc: "NAB Valsad empowers 190+ students with free education, modern facilities, vocational training, and holistic development.",
    img: Img2020,
  },
];

const Journey = () => {
  const [active, setActive] = React.useState(2);
  return (
    <div className="container px-0 flex justify-center ">
      <div className="w-full border border-white rounded-lg space-y-8 relative">
        <div className="flex justify-around items-baseline space-x-0">
          {/* Step 1 */}

          {TimeLine.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className="text-center"
            >
              <div
                className={` overflow-hidden relative  ${
                  index === active ? "h-60 w-60" : "w-40 h-40 sm:w-44 sm:h-44"
                }`}
              >
                <img
                  src={item.img}
                  alt=""
                  className="rounded-full h-full w-full"
                />
                {active === index && (
                  <div className="absolute inset-0 bg-black/40 rounded-full p-5 flex flex-col items-center justify-center gap-3">
                    <BaseLine className="bg-white w-14" />
                    <p className="text-white text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <hr className="h-1 bg-primary w-full absolute translate-y-2" />
        <div className=" flex justify-around space-x-8">
          {TimeLine.map((item, index) => (
            <div
            onClick={()=> setActive(index)}
                className={`overflow-hidden relative transition-all duration-300 ease-in-out ${
                  index === active ? "h-60 w-60" : "w-40 h-40 sm:w-44 sm:h-44"
                }`}
              >
              <div className="bg-white p-2 border-4 border-primary rounded-full w-fit mx-auto relative before:absolute before:h-5 before:w-1  before:bg-primary before:-bottom-5 before:right-1/2 before:translate-x-1/2 mb-8"></div>
              <p
                className={`text-center text-primary font-bold transition-all duration-300 ease-in-out${
                  active === index ? " text-2xl" : ""
                }`}
              >
                {item.decade}
              </p>
              <p
                className={`text-center text-primary transition-all duration-300 ease-in-out ${
                  active === index ? "font-bold text-2xl" : ""
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;

// <h1 className="text-center text-2xl font-bold text-primary">
//               {TimeLine[active].title}
//             </h1>
//             <p className="text-center">{TimeLine[active].desc}</p>
