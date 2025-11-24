import React from "react";
import mission from "../../../assets/AboutUsImgs/Missions&vision/mission.png";
import Group124 from "../../../assets/AboutUsImgs/Missions&vision/Group124.svg";
import Group48 from "../../../assets/AboutUsImgs/Missions&vision/Group48.svg";

const OurMissionVision = () => {
  const cards = [
    {
      id: 1,
      icon: Group48,
      title: "Our Mission",
      description:
        "To empower visually and physically challenged individuals through education, vocational training, healthcare, and holistic support. We aim to nurture their abilities, restore their confidence, and help them lead independent, dignified, and fulfilling lives as active members of society.",
    },
    {
      id: 2,
      icon: Group124,
      title: "Our Vision",
      description:
        "To create an inclusive world where every visually and physically challenged person has equal access to opportunity, respect, and self-reliance. We envision a community built on compassion and empowerment, where disability is not a limitation but a path to possibility.",
    },
  ];

  return (
    <section
      style={{ backgroundImage: `url(${mission})` }}
      className="m-3 rounded-xl bg-cover bg-center bg-no-repeat py-20 flex justify-center"
    >
      <div className="relative container mx-auto grid md:grid-cols-2 gap-16 lg:gap-20 xl:gap-24">
        {cards.map((card) => (
          <div
          data-aos="zoom-out"
            key={card.id}
            className="bg-white/30 backdrop-blur-md rounded-xl p-8 lg:p-9 xl:p-10 text-center shadow-lg"
          >
            <img src={card.icon} alt={`${card.title} icon`} className="mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-4">{card.title}</h2>
            <p className="text-white text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMissionVision;
