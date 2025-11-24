import Values from "./Values";
import Empowerment from "../../../assets/HomepageImgs/svg1.svg";
import Empowerment1 from "../../../assets/HomepageImgs/svg11.svg";
import WillPower from "../../../assets/HomepageImgs/svg2.svg";
import WillPower2 from "../../../assets/HomepageImgs/svg22.svg";
import Support from "../../../assets/HomepageImgs/svg3.svg"; 
import Support1 from "../../../assets/HomepageImgs/svg33.svg"; 
import Handshake from "../../../assets/HomepageImgs/svg4.svg";
import Handshake1 from "../../../assets/HomepageImgs/svg44.svg";

const ValueApp = () => {
  const carts = [
    {
      key: 0,
      img: Empowerment,
      hover: Empowerment1,
      MainText: "Empower Through Education",
      SubText: "Inclusive education with Braille support",
    },
    {
      key: 1,
      img: WillPower,
      hover: WillPower2,
      MainText: "Promote Self Reliance",
      SubText: "Vocational training for sustainable livelihoods",
    },
    {
      key: 2,
      img: Support,
      hover: Support1,
      MainText: "Provide Holistic Support",
      SubText: "Comprehensive student welfare and support",
    },
    {
      key: 3,
      img: Handshake,
      hover: Handshake1,
      MainText: "Build Community Partnerships",
      SubText: "Encourage community engagement and support",
    }
  ];

  return (
    <div>
      <Values cartData={carts} />
    </div>
  );
};

export default ValueApp;
