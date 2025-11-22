import React from "react";
import WhyDonate from "./DonateNowSections/WhyDonate";
import WaysYouCanHelp from "./DonateNowSections/WaysYouCanHelp";
import CelebrateFestivals from "./DonateNowSections/CelebrateFestivals";
import Header from "../../component/Header";
import Help from "../../component/Help";
import SocialPage from "../../component/SocialPage";

const DonateNow = () => {
  return (
    <div>
      <Header
        HeadText={"DONATE NOW"}
        SubText={
          <>Empowering children through <br /> education your donation makes <br /> dreams possible.</>
        }
        CurrntPage={"Donate Now"}
        PageLink="/donatenow"
      />
      <WhyDonate />
      <WaysYouCanHelp />
      <CelebrateFestivals />
      <Help/>
    </div>
  );
};

export default DonateNow;
