import React from "react";
import Committed from "./AboutSections/Committed";
import Help from "../../component/Help";
import SocialPage from "../../component/SocialPage";
import Header from "../../component/Header";
import AboutUsHead from "../../assets/AboutUsImgs/AboutUsHead.png";
import OurPhilosophy from "../AbouUS/AboutSections/OurPhilosophy";
import OurJourney from "./AboutSections/OurJourney ";
import Expanding from "./AboutSections/Expanding";
import OurMissionVision from "./AboutSections/OurMissionVision";
import Certificate from "./AboutSections/Certificate";

const AboutUs = () => {
  return (
    <div>
      <Header BgImg={AboutUsHead} CurrntPage={"About Us"} PageLink="/aboutus" HeadText={""}  />
      <Committed />
      <OurPhilosophy />
      <OurJourney />
      <Expanding />
      <OurMissionVision />
      <Certificate />
      <Help />
    </div>
  );
};

export default AboutUs;
