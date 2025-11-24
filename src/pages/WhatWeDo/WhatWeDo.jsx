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
    <div className="overflow-hidden">
      <Header
        BgImg={WeDoHead}
        HeadText={"WHAT WE DO"}
        SubText={
          <>
            Empowering visually impaired children <br /> througheducation, care,
            and skill development <br /> to build confidence, independence, and{" "}
            <br /> brighter futures
          </>
        }
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
