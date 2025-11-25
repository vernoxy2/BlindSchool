import BaseLine from "../../../component/BaseLine";
import Vector1 from "../../../assets/HomepageImgs/Vector1.svg";
import Vector11 from "../../../assets/HomepageImgs/Vector11.svg";
import Vector2 from "../../../assets/HomepageImgs/Vector2.svg";
import Vector22 from "../../../assets/HomepageImgs/Vector22.svg";
import Vector3 from "../../../assets/HomepageImgs/Vector3.svg";
import Vector33 from "../../../assets/HomepageImgs/Vector33.svg";
import { link } from "framer-motion/client";
import { Link } from "react-router-dom";

const HowCanYouHelp = () => {
  const carts = [
    {
      key: 0,
      img: Vector1,
      imgHover: Vector11,
      MainText: "Be a Volunteer",
      SubText:
        "Make a difference with NAB Delhi! Volunteer to support, empower, and uplift visually impaired individuals through programs, events, and initiatives.",
      btnText: "Join Now",
      link: "/contact",
    },
    {
      key: 1,
      img: Vector2,
      imgHover: Vector22,
      MainText: "Give Donation",
      SubText:
        "Your donation helps NAB Delhi provide education, healthcare, and job opportunities, empowering visually impaired individuals to build brighter, independent futures.",
      btnText: "Donation Now",
      link: "/donatenow",
    },
    {
      key: 2,
      img: Vector3,
      imgHover: Vector33,
      MainText: "Join as CSR",
      SubText:
        "Partner with NAB Delhi as a CSR ally to empower visually impaired individuals through vital resources, services, and inclusive community initiatives.",
      btnText: "Be a CSR Partner",
      link: "/csr",
    },
  ];

  return (
    <section className="container">
      <h1 data-aos="fade-up" className="font-bold text-center">
        How Can You Help?
      </h1>
      <p data-aos="fade-up" className="md:text-sm text-center">
        Your Support Matters: Let's Transform the Lives of the Visually
        Impaired, Together.
      </p>
      <BaseLine className="mx-auto" />

      {/* FLEX VIEW STARTS HERE */}
      <div
        data-aos="fade-up"
        className="xl:w-11/12 2xl:w-10/12 mx-auto flex flex-wrap gap-6 justify-center"
      >
        {carts?.map((item) => (
          <div
            key={item.key}
            className="space-y-4 flex flex-col items-center justify-between shadow-lg p-9 hover:border-primary border group transition-all duration-300 hover:scale-105
            w-full md:w-[48%]  xl:w-[31%]"
          >
            <div daat-aos="zoom-out" className="relative">
              <img
                src={item.img}
                alt={item.MainText}
                className="w-16 h-16 transition-all group-hover:opacity-0"
              />
              <img
                src={item.imgHover}
                alt={item.MainText}
                className="w-16 h-16 transition-all opacity-0 group-hover:opacity-100 absolute top-0"
              />
            </div>

            <h1 className="text-xl font-bold text-black transition-colors group-hover:text-primary">
              {item.MainText}
            </h1>

            <p className="text-black text-center transition-colors">
              {item.SubText}
            </p>

            {/* <div className="w-full flex gap-3 items-center justify-between pt-4">
              <BaseLine />
              <Link
                to={item.link}
                className="bg-primary hover:bg-white p-2.5 font-bold  duration-300 hover:shadow-lg active:scale-95 text-white hover:text-primary text-lg inline-block whitespace-nowrapwhitespace-nowrap"
              >
                {item.btnText}
              </Link>
            </div> */}
             <div className="w-full flex gap-2 items-center justify-between pt-4">
              <BaseLine />
              <Link to={item.link} className="bg-primary hover:bg-white text-white hover:text-primary hover:shadow-lg transition-colors text-xl p-2.5 font-semibold  whitespace-nowrap flex items-center justify-center border border-transparent hover:border-primary">
                {item.btnText}
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* FLEX VIEW ENDS HERE */}
    </section>
  );
};

export default HowCanYouHelp;
