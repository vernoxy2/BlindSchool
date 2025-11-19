import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "../src/component/NavBar";
import HomePage from "./pages/Homepage/HomePage";
import About from "./pages/AbouUS/About";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import CSR from "./pages/CSR/CSR";
import Contact from "./pages/ContactUs/Contact";
import DonateNow from "./pages/DonateNow/DonateNow";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/CSR" element={<CSR />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/donatenow" element={<DonateNow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
