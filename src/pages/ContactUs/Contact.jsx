import React from "react";
import Header from "../../component/Header";
import ContactUs from "../../assets/ContactUsImgs/ContacUs.png";
import GetAQuote from "./ContactSections/GetAQuote";
import GoogleMap from "./ContactSections/GoogleMap";
import SocialPage from "../../component/SocialPage";

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <Header
        BgImg={ContactUs}
        HeadText={"CONTACT US"}
        SubText={
          <>Contact us to support, learn, or <br /> collaborate in empowering visually <br /> impaired students toward <br /> independence.</>
        }
        CurrntPage={"Contact Us"}
        PageLink="/contactus"
      />
      <GetAQuote />
      <GoogleMap />
    </div>
  );
};

export default Contact;
