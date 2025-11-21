import React from "react";
import CSRHead from "../../assets/CSRPageImgs/CERHead.webp";
import JoinHandsCSR from "./CSRSections/JoinHandsCSR";
import Partner from "./CSRSections/Partner";
import MakeDiff from "./CSRSections/MakeDiff";
import ImpactMatters from "./CSRSections/ImpactMatters";
import DreamOfSociety from "./CSRSections/DreamOfSociety";
import SocialPage from "../../component/SocialPage";
import Header from "../../component/Header";
import Help from "../../component/Help";

const CSR = () => {
  return (
    <div>
      <Header
        BgImg={CSRHead}
        HeadText={"CSR"}
        SubText={
          "Partner with us through CSR initiatives to empower visually impaired lives with education, skills, and independence."
        }
        CurrntPage={"CSR"}
        PageLink="/csr"
      />

      <JoinHandsCSR />
      <Partner />
      <MakeDiff />
      <ImpactMatters />
      <DreamOfSociety />
      <Help />
    </div>
  );
};

export default CSR;
