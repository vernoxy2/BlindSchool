import React from "react";
import Involved from "../../../assets/WeDoPageImgs/InvolvedBg.webp";
import icon4 from "../../../assets/WeDoPageImgs/heart.svg";
import icon3 from "../../../assets/WeDoPageImgs/partners.svg";
import icon2 from "../../../assets/WeDoPageImgs/support.svg";
import icon1 from "../../../assets/WeDoPageImgs/volunteering.svg";

const data = [
  {
    id: 1,
    name: "Volunteer with us",
    img: icon1,
  },
  {
    id: 2,
    name: "Sponsor a Student",
    img: icon2,
  },
  {
    id: 3,
    name: "Partner With NAB",
    img: icon3,
  },
  {
    id: 4,
    name: "Donate for the Cause",
    img: icon4,
  },
];

const GetInvolved = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Involved})` }}
      className="text-center rounded-2xl m-2 py-10 bg-cover bg-center bg-no-repeat"
    >
      <h1 className="text-white">Get Involved</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="shadow-md rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm bg-white/20  py-12 hover:scale-105 duration-300 transition-transform"
          >
            <div className="space-y-8 ">
              <img src={item.img} alt="" className="border rounded-full p-2 mx-auto"/>
              <h2 className="text-center text-white font-bold w-2/3 mx-auto">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-white font-bold">Your time, skill, or donation <br /> can change a life.</h2>
    </section>
  );
};

export default GetInvolved;
