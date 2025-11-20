import React from "react";
import Header from "../../component/Header";
import ContactUs from "../../assets/ContactUsImgs/ContacUs.png";
import GetAQuote from "./ContactSections/GetAQuote";
import GoogleMap from "./ContactSections/GoogleMap";
import SocialPage from "../Homepage/HomePageSections/SocialPage";

const Contact = () => {
  return (
    <div>
      <Header
        BgImg={ContactUs}
        HeadText={"CONTACT US"}
        SubText={
          " Contact us to support, learn, or collaborate in empowering visually impaired students toward independence."
        }
        CurrntPage={"Contact Us"}
        PageLink="/contactus"
      />
      <GetAQuote />
      <GoogleMap />
      <SocialPage />
    </div>
  );
};

export default Contact;
