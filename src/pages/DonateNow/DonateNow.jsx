import React from "react";
// import { useNavigate } from "react-router-dom";
import Head from "./DonateNowSections/Head";
import WhyDonate from "./DonateNowSections/WhyDonate";
import WaysYouCanHelp from "./DonateNowSections/WaysYouCanHelp";
import Cards from "./DonateNowSections/Cards";
import CelebrateFestivals from "./DonateNowSections/CelebrateFestivals";
import Header from "../../component/Header";
import Help from "../../component/Help";

const DonateNow = () => {
  return (
    <div>
      <Header
        HeadText={"DONATE NOW"}
        SubText={
          "Empowering children through education your donation makes dreams possible."
        }
        CurrntPage={"Donate Now"}
        PageLink="/donatenow"
      />
      {/* <Head /> */}
      <WhyDonate />
      <WaysYouCanHelp />
      {/* <Cards /> */}
      <CelebrateFestivals />
      <Help/>
      
    </div>
  );
};

export default DonateNow;
