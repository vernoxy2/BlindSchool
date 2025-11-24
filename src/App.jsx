import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "../src/component/NavBar";
import HomePage from "./pages/Homepage/HomePage";
import AboutUs from "./pages/AbouUS/AboutUs";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import CSR from "./pages/CSR/CSR";
import Contact from "./pages/ContactUs/Contact";
import DonateNow from "./pages/DonateNow/DonateNow";
import SocialPage from "./component/SocialPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/CSR" element={<CSR />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/donatenow" element={<DonateNow />} />
        </Routes>
        <SocialPage />
      </BrowserRouter>
    </div>
  );
};

export default App;
