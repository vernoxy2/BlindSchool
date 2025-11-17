import Values from "./Values";
import Empowerment from "../../../assets/HomepageImgs/empowerment (1).svg";
import WillPower from "../../../assets/HomepageImgs/Willpower.svg";
import Support from "../../../assets/HomepageImgs/Support.svg"; 
import Handshake from "../../../assets/HomepageImgs/Handshake.svg";

const ValueApp = () => {
  const carts = [
    {
      key: 0,
      img: Empowerment,
      MainText: "Empower Through Education",
      SubText: "Inclusive education with Braille support",
    },
    {
      key: 1,
      img: WillPower,
      MainText: "Promote Self Reliance",
      SubText: "Vocational training for sustainable livelihoods",
    },
    {
      key: 2,
      img: Support,
      MainText: "Provide Holistic Support",
      SubText: "Comprehensive student welfare and support",
    },
    {
      key: 3,
      img: Handshake,
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
