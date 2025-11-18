// import React, { useEffect } from 'react'
import HowCanYouHelp from "../../Homepage/HomePageSections/HowCanYouHelp";
import Vector from "../../../assets/HomepageImgs/Vector.svg";
import Vector2 from "../../../assets/HomepageImgs/Vector2.svg";
import Vector3 from "../../../assets/HomepageImgs/Vector3.svg";
const HowCanYouHelpApp = () => {
     const carts = [
        {
          key: 0,
          img: Vector,
          MainText: "Be a Volunteer",
          SubText: "Make a difference with NAB Delhi! Volunteer to support, empower, and uplift visually impaired individuals through programs, events, and initiatives.",
        },
        {
          key: 1,
          img: Vector2,
          MainText: "Promote Self Reliance",
          SubText: "Vocational training for sustainable livelihoods",
        },
        {
          key: 2,
          img: Vector3,
          MainText: "Provide Holistic Support",
          SubText: "Comprehensive student welfare and support",
        },
      ];

  return (
    <div>
      <HowCanYouHelp cartDatas={carts} />
    </div>
  )
}

export default HowCanYouHelpApp
