import React from "react";
// import { useNavigate } from "react-router-dom";
import Head from "./DonateNowSections/Head";
import WhyDonate from "./DonateNowSections/WhyDonate";
import WaysYouCanHelp from "./DonateNowSections/WaysYouCanHelp";
import Cards from "./DonateNowSections/Cards";
import CelebrateFestivals from "./DonateNowSections/CelebrateFestivals";

const DonateNow = () => {
  return (
    <div>
      <Head />
      <WhyDonate />
      <WaysYouCanHelp />
      <Cards /> 
      <CelebrateFestivals />
    </div>
  );
};

export default DonateNow;
