import React from "react";
import Img1980 from "../../../assets/AboutUsImgs/OurJourneyImgs/1980.png";
import Img1990 from "../../../assets/AboutUsImgs/OurJourneyImgs/1980.png";
import Img2000 from "../../../assets/AboutUsImgs/OurJourneyImgs/2000.png";
import Img2010 from "../../../assets/AboutUsImgs/OurJourneyImgs/2010.png";
import Img2020 from "../../../assets/AboutUsImgs/OurJourneyImgs/2020.png";
import BaseLine from "../../../component/BaseLine";
import Journey from "./Journey";

const TimeLine = [
  {
    decade: "1980s",
    title: "The Beginning of a Vision",
    desc: "NAB Valsad offered vocational training, empowering visually challenged individuals across South Gujarat with community support.",
    img: Img1980,
  },
  {
    decade: "1990s",
    title: "Laying the Foundation",
    desc: "NAB Valsad started vocational training in typing, weaving, and telephone operation, empowering village students and gaining recognition.",
    img: Img1990,
  },
  {
    decade: "2000s",
    title: "Expanding Horizons",
    desc: "In 1984, Shri Ramubhai K. Patel founded NAB Valsad to empower visually challenged individuals through education and dignity.",
    img: Img2000,
  },
  {
    decade: "2010s",
    title: "Strengthening Education & Outreach",
    desc: "We integrated blind students, partnered with schools, supported higher education, and expanded outreach to rural visually impaired.",
    img: Img2010,
  },
  {
    decade: "2020s",
    title: "Moving Toward a Brighter Future",
    desc: "NAB Valsad empowers 190+ students with free education, modern facilities, vocational training, and holistic development.",
    img: Img2020,
  },
];

const OurJourney = () => {
  return (
    <section className="text-center flex flex-col items-center space-y-6 py-12 ">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-bold text-primary container">
        Our Journey of Growth <br /> and Impact
      </h1>
      <p className="max-w-xl leading-relaxed text-gray-700 container">
        From a small beginning to a thriving community of hope, every decade has
        been a step toward empowerment, inclusion, and independence for the
        differently-abled.
      </p>
<Journey/>
    </section>
  );
};

export default OurJourney;
