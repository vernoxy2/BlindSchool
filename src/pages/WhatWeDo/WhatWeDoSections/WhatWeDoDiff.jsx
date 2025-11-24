import React, { useEffect } from "react";
import BaseLine from "../../../component/BaseLine";
import Card1 from "../../../assets/WeDoPageImgs/Cards/Card1.png";
import Card2 from "../../../assets/WeDoPageImgs/Cards/Card2.png";
import Card3 from "../../../assets/WeDoPageImgs/Cards/Card3.png";
import Card4 from "../../../assets/WeDoPageImgs/Cards/Card4.png";
import Card5 from "../../../assets/WeDoPageImgs/Cards/Card5.png";
import Svg1 from "../../../assets/WeDoPageImgs/Cards/Icon1.svg";
import Svg11 from "../../../assets/WeDoPageImgs/Cards/Icon11.svg";
import Svg2 from "../../../assets/WeDoPageImgs/Cards/Icon2.svg";
import Svg22 from "../../../assets/WeDoPageImgs/Cards/Icon22.svg";
import Svg3 from "../../../assets/WeDoPageImgs/Cards/Icon3.svg";
import Svg33 from "../../../assets/WeDoPageImgs/Cards/Icon33.svg";
import Svg4 from "../../../assets/WeDoPageImgs/Cards/Icon4.svg";
import Svg44 from "../../../assets/WeDoPageImgs/Cards/Icon44.svg";
import Svg5 from "../../../assets/WeDoPageImgs/Cards/Icon5.svg";
import Svg55 from "../../../assets/WeDoPageImgs/Cards/Icon55.svg";
import Svg6 from "../../../assets/WeDoPageImgs/Cards/Icon6.svg";
import Svg66 from "../../../assets/WeDoPageImgs/Cards/Icon66.svg";
import DonateNow from "../../../component/DonateNow";

const data = [
  {
    id: "education-skill-development",
    img: Card1,
    svg: Svg1,
    ssvg: Svg11,
    title: "Education & Skill Development",
    subtitle: "Education is at the heart of everything we do",
    text: "We empower visually and physically challenged students with education, Braille, computers, and life skills to achieve confidence, independence, and inclusion.",
  },
  {
    id: "vocational-training",
    img: Card2,
    svg: Svg2,
    ssvg: Svg22,
    title: "Vocational Training",
    subtitle: "We believe in creating opportunities for self-reliance.",
    text: "We train students in diverse vocational skills, empowering them to work, earn, support families, and live independent, dignified lives confidently.",
  },
  {
    id: "accommodation-food-care",
    img: Card3,
    svg: Svg3,
    ssvg: Svg33,
    title: "Accommodation, Food & Daily Care",
    subtitle:
      "NAB Valsad is not just a place to study it’s a home for over 190 students.",
    text: "We offer free accommodation, nutritious meals, and constant care, creating a safe, loving community where every student belongs.",
  },
  {
    id: "healthcare-medical-support",
    img: Card4,
    svg: Svg4,
    ssvg: Svg44,
    title: "Healthcare & Medical Support",
    subtitle: "Health and well-being are a vital part of our mission.",
    text: "We ensure students’ health through checkups and care, while outreach identifies and supports people with vision loss toward rehabilitation.",
  },
  {
    id: "community-outreach",
    img: Card5,
    svg: Svg5,
    ssvg: Svg55,
    title: "Community Outreach ",
    subtitle: "Our impact extends beyond our campus walls.",
    text: "Our outreach in Valsad villages promotes eye health, connects visually impaired people to care, and fosters inclusion through community awareness.",
  },
  {
    id: "your-support-matters",
    img: Card1,
    svg: Svg6,
    ssvg: Svg66,
    title: "Your Support Matters",
    subtitle: "Your small contribution can bring a big change.",
    text: "Support our efforts to provide education, care, and opportunities to the visually and physically challenged.Together, we can create brighter, more inclusive futures.",
  },
  // You can add more cards here
];

// New Card Component
const WhatWeDoCard = ({ img, svg, title, subtitle, text, ssvg, id }) => {
  return (
    <div
          data-aos="fade-up"

      id={id}
      className="shadow-md hover:-translate-y-5 duration-500 transition-transform group/card flex flex-col h-full relative"
    >
      <img src={img} alt="" className="w-full" />

      <div className="space-y-4 px-6 py-10">
        <div className="flex items-center gap-5">
          <img
            src={svg}
            alt=""
            className="group-hover/card:hidden duration-300 transition-colors"
          />
          <img
            src={ssvg}
            alt=""
            className="hidden group-hover/card:block duration-300 transition-colors"
          />

          <h2 className="text-start text-[#B9B9B9] group-hover/card:text-primary duration-200 transition-colors font-bold">
            {title}
          </h2>
        </div>

        <p className="text-start text-textcolor font-bold xl:w-2/3 flex items-center gap-5">
          <span className="h-10 bg-primary w-1 flex my-auto rounded-lg"></span>
          {subtitle}
        </p>

        <p>{text}</p>

        <DonateNow
          className="absolute top-0 right-4 hover:bg-white rounded-xl group/btn"
          className2="group-hover/btn:text-primary duration-200 transition-colors"
          className3="group-hover/btn:text-primary duration-200 transition-colors"
        />
      </div>
    </div>
  );
};

const WhatWeDoDiff = () => {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start", offsetTop: 100 });
      }
    }
  }, []);
  return (
    <>
      <section className="text-center space-y-5">
        <h1 data-aos="fade-up">What We Do</h1>
        <h2 data-aos="fade-up" className="text-textcolor font-bold">How We Make a Difference</h2>
        <BaseLine className="bg-textcolor mx-auto" />
        <p data-aos="fade-up" className="md:w-4/5 xl:w-1/2 mx-auto container ">
          At Valsad National Association for the Blind (NAB), Gujarat, we are
          dedicated to empowering visually and physically challenged individuals
          to live with confidence, independence, and dignity. Through our
          education, training, and care programs, we help them build skills for
          life and a future full of possibilities.
        </p>
      </section>
      <div className="container pb-10 md:pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-16">
        {data.map((item) => (
          <WhatWeDoCard
            key={item.id}
            id={item.id}
            img={item.img}
            svg={item.svg}
            ssvg={item.ssvg}
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
          />
        ))}
      </div>
    </>
  );
};

export default WhatWeDoDiff;
