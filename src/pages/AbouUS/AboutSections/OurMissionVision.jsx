import React from "react";
import mission from "../../../assets/AboutUsImgs/Missions&vision/mission.png";
import Group124 from "../../../assets/AboutUsImgs/Missions&vision/Group124.svg";
import Group48 from "../../../assets/AboutUsImgs/Missions&vision/Group48.svg"
const OurMissionVision = () => {
  return (
    <section
      style={{ backgroundImage: `url(${mission})` }}
      className="w-full bg-cover bg-center bg-no-repeat py-20 flex justify-center m-3"
    >
    
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto grid md:grid-cols-2 gap-24">
        {/* Mission Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-10 text-center shadow-lg">
          <img src={Group48} alt="mission icon" className="mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white text-sm leading-relaxed">
            To empower visually and physically challenged individuals through
            education, vocational training, healthcare, and holistic support. We
            aim to nurture their abilities, restore their confidence, and help
            them lead independent, dignified, and fulfilling lives as active
            members of society.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-10 text-center shadow-lg">
          <img src={Group124} alt="vision icon" className="mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-white text-sm leading-relaxed">
            To create an inclusive world where every visually and physically
            challenged person has equal access to opportunity, respect, and
            self-reliance. We envision a community built on compassion and
            empowerment, where disability is not a limitation but a path to
            possibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMissionVision;




