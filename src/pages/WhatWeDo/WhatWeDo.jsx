import React from "react";
import WhatWeDoDiff from "./WhatWeDoSections/WhatWeDoDiff";
import Card from "./WhatWeDoSections/card";
import GetInvolved from "./WhatWeDoSections/GetInvolved";
import Help from "../../component/Help";
import SocialPage from "../../component/SocialPage";
import Header from "../../component/Header";
import WeDoHead from "../../assets/WeDoPageImgs/WeDoHead.webp";

const WhatWeDo = () => {
  return (
    <div>
      <Header
        BgImg={WeDoHead}
        HeadText={"WHAT WE DO"}
        SubText={"Empowering visually impaired children througheducation, care, and skill development to build confidence, independence, and brighter futures"}
        CurrntPage={"What We Do"}
        PageLink="/whatwedo"
      />
      <WhatWeDoDiff />
      <GetInvolved />
      <Help />
    </div>
  );
};

export default WhatWeDo;
