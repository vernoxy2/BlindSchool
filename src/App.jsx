import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "../src/component/NavBar";
import HomePage from "./pages/Homepage/HomePage";
import AboutUs from "./pages/AbouUS/AboutUs";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import CSR from "./pages/CSR/CSR";
import Contact from "./pages/ContactUs/Contact";
import DonateNow from "./pages/DonateNow/DonateNow";
import SocialPage from "./component/SocialPage";
import ScrollToTop from "./component/ScrollToTop";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      // once: true,
      delay: 200,
    });
  })
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donatenow" element={<DonateNow />} />
        </Routes>
        <SocialPage />
      </BrowserRouter>
    </div>
  );
};


export default App;
