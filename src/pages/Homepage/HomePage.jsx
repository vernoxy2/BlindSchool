import React from 'react'
import Header from './HomePageSections/Header';
import Head2 from "../../assets/HomepageImgs/Head2.png";
import Head3 from "../../assets/HomepageImgs/Head3.png";
import HeadImg from "../../assets/HomepageImgs/HeadImg.png";
import ValuesApp from './HomePageSections/ValueApp';
import AboutUS from './HomePageSections/AboutUs';
import Help from '../../component/Help';
import HowCanYouHelp from './HomePageSections/HowCanYouHelp';
import OurImpact from './HomePageSections/OurImpact';
import OurPartner from './HomePageSections/OurPartner';
import SocialPage from '../../component/SocialPage';

const HomePage = () => {
  const slides = [
      {
        BgImg: HeadImg,
        MainText: "Your Support Changes Lives.",
        SubText: (
          <>
            Help us provide food, education, and care to{" "}
            <span className="text-primary font-bold">190+ visually</span> and
            physically challenged individuals.
          </>
        ),
      },
      {
        BgImg: Head2,
        MainText: "A HOME OF HOPE AND COURAGE.",
        SubText: (
          <>
            Where every child learns to live with strength, dignity, and dreams.
            Learn More
          </>
        ),
      },
      {
        BgImg: Head3,
        MainText: "TRANSFORMING DISABILITY INTO POSSIBILITY.",
        SubText: (
          <>
            Empowering the differently-abled to live, learn, and thrive since
            1984.
          </>
        ),
      },
    ];
  return (
    <div>
      <Header slides={slides}/>
      <ValuesApp />
      <AboutUS />
      <HowCanYouHelp />
      <OurImpact />
      <OurPartner />
      <Help />
    </div>
  )
}

export default HomePage
