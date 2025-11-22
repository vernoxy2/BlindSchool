import React from "react";
import Icon1 from "../../../assets/DonatePageImgs//canhelp/Help1.svg";
import Icon2 from "../../../assets/DonatePageImgs//canhelp/Help2.svg";
import Icon3 from "../../../assets/DonatePageImgs//canhelp/Help3.svg";
import Help1 from "../../../assets/DonatePageImgs/canhelp/Help1.webp";
import Help2 from "../../../assets/DonatePageImgs/canhelp/Help2.webp";
import Help3 from "../../../assets/DonatePageImgs/canhelp/Help3.webp";

const data = [
  {
    id: 1,
    name: "Donate Your Time",
    sub: "Give a little of your time and make a lifetime of difference. Volunteer to teach, mentor, or simply share moments with our students. Your presence brings confidence, joy, and hope.",
    img: Help1,
    icon: Icon1,
  },
  {
    id: 2,
    name: "Donate Your Support",
    sub: "Your support helps us provide free education, food, healthcare, and accommodation to our 190+ students.Every rupee you give helps someone live with dignity and independence.",
    img: Help2,
    icon: Icon2,
  },
  {
    id: 3,
    name: "Donate Your Kind",
    sub: "You can also help by donating books, clothes, groceries, or assistive tools for our students.Every thoughtful gift brings comfort, learning, and care to those who need it most.",
    img: Help3,
    icon: Icon3,
  },
  // Add more items as needed
];

const WaysYouCanHelp = () => {
  return (
    <section className="text-center container py-10 -mt-40">
      <h1 className=" font-bold pb-10">Ways You Can Help</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div key={item.id} className="shadow-md rounded-lg hover:-translate-y-5 duration-300 transition-transform">
            <div className="w-full">
              <img src={item.img} alt="" />
            </div>
            <div className="p-7 pt-12 relative space-y-3">
              <img src={item.icon} alt="" className="absolute -top-12 left-0" />
              <h2 className="text-start text-primary font-bold w-2/3 2xl:w-1/2 flex gap-4">
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

export default WaysYouCanHelp;
