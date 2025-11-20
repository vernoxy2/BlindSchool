import React from "react";
import BaseLine from "../../../component/BaseLine";
import Card1 from "../../../assets/WeDoPageImgs/Cards/Card1.png";
import Card2 from "../../../assets/WeDoPageImgs/Cards/Card2.png";
import Card3 from "../../../assets/WeDoPageImgs/Cards/Card3.png";
import Card4 from "../../../assets/WeDoPageImgs/Cards/Card4.png";
import Card5 from "../../../assets/WeDoPageImgs/Cards/Card5.png";
import Svg1 from "../../../assets/WeDoPageImgs/Cards/Svg1.svg";
import Svg2 from "../../../assets/WeDoPageImgs/Cards/Svg2.svg";
import Svg3 from "../../../assets/WeDoPageImgs/Cards/Svg3.svg";
import Svg4 from "../../../assets/WeDoPageImgs/Cards/Svg4.svg";
import Svg5 from "../../../assets/WeDoPageImgs/Cards/Svg5.svg";
import Svg6 from "../../../assets/WeDoPageImgs/Cards/Svg6.svg";

const data = [
  {
    id: 1,
    img: Card1,
    svg: Svg1,
    title: "Education & Skill Development",
    subtitle: "Education is at the heart of everything we do",
    text: "We empower visually and physically challenged students with education, Braille, computers, and life skills to achieve confidence, independence, and inclusion.",
  },
  {
    id: 2,
    img: Card2,
    svg: Svg2,
    title: "Vocational Training",
    subtitle: "We believe in creating opportunities for self-reliance.",
    text: "We train students in diverse vocational skills, empowering them to work, earn, support families, and live independent, dignified lives confidently.",
  },
  {
    id: 3,
    img: Card3,
    svg: Svg3,
    title: "Accommodation, Food & Daily Care",
    subtitle: "NAB Valsad is not just a place to study it’s a home for over 190 students.",
    text: "We offer free accommodation, nutritious meals, and constant care, creating a safe, loving community where every student belongs.",
  },
  {
    id: 4,
    img: Card4,
    svg: Svg4,
    title: "Healthcare & Medical Support",
    subtitle: "Health and well-being are a vital part of our mission.",
    text: "We ensure students’ health through checkups and care, while outreach identifies and supports people with vision loss toward rehabilitation.",
  },
  {
    id: 5,
    img: Card5,
    svg: Svg5,
    title: "Community Outreach ",
    subtitle: "Our impact extends beyond our campus walls.",
    text: "Our outreach in Valsad villages promotes eye health, connects visually impaired people to care, and fosters inclusion through community awareness.",
  },
  {
    id: 6,
    img: Card1,
    svg: Svg6,
    title: "Your Support Matters",
    subtitle: "Your small contribution can bring a big change.",
    text: "Support our efforts to provide education, care, and opportunities to the visually and physically challenged.Together, we can create brighter, more inclusive futures.",
  },
  // You can add more cards here
];

// New Card Component
const WhatWeDoCard = ({ img, svg, title, subtitle, text }) => {
  return (
    <div className="shadow-md hover:-translate-y-5 duration-300 transition-transform group flex flex-col h-full">
      <img src={img} alt="" className="w-full" />
      <div className="space-y-4 px-6 py-10">
        <div className="flex flex-row justify-center items-center gap-5">
          <img src={svg} alt="" />
          <h2 className="text-start text-[#B9B9B9] group-hover:text-primary duration-200 transition-colors font-bold">
            {title}
          </h2>
        </div>
        <p className="text-start text-textcolor font-bold w-2/3 flex gap-5">
          <span className="h-10 bg-primary w-1 p-0.5 flex flex-col my-auto rounded-lg"></span>
          {subtitle}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const WhatWeDoDiff = () => {
  return (
    <>
      <section className="text-center space-y-5">
        <h1>What We Do</h1>
        <h2 className="text-textcolor font-bold">How We Make a Difference</h2>
        <BaseLine className="bg-textcolor" />
        <p className="w-3/6 mx-auto">
          At Valsad National Association for the Blind (NAB), Gujarat, we are
          dedicated to empowering visually and physically challenged individuals
          to live with confidence, independence, and dignity. Through our
          education, training, and care programs, we help them build skills for
          life and a future full of possibilities.
        </p>
      </section>
      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <WhatWeDoCard
            key={item.id}
            img={item.img}
            svg={item.svg}
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
          />
        ))}
      </section>
    </>
  );
};

export default WhatWeDoDiff;
