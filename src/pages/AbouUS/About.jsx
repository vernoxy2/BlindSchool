import React from "react";
import Head from "./AboutSections/Head";
import Committed from "./AboutSections/Committed";
import OurPhilosophy from "./AboutSections/OurPhilosophy";
import OurJourney from "./AboutSections/OurJourney ";
import Expanding from "./AboutSections/Expanding";
import OurMissionVision from "./AboutSections/OurMissionVision";
import Certificate from "./AboutSections/Certificate";
import Help from "../Homepage/HomePageSections/Help";
import SocialPage from "../Homepage/HomePageSections/SocialPage";


const about = () => {
  return (
    <div>
      <Head />
      <Committed />
      <OurPhilosophy />
      <OurJourney />
      <Expanding />
      <OurMissionVision />
      <Certificate />
      <Help />
      <SocialPage />
    </div>
  );
};

export default about;
