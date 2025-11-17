import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "../src/component/NavBar";
import Header from "./pages/Homepage/HomePageSections/Header";
import Aboutus from "./pages/Homepage/HomePageSections/AboutUs";
import Help from "./pages/Homepage/HomePageSections/Help";
import Values from "./pages/Homepage/HomePageSections/Values";
import ValueApp from "./pages/Homepage/HomePageSections/ValueApp";
import HeadImg from "../src/assets/HomepageImgs/HeadImg.png";
import Head2 from "../src/assets/HomepageImgs/Head2.png";
import Head3 from "../src/assets/HomepageImgs/Head3.png";
import Head from "./pages/AbouUS/AboutSections/Head";
import WhatWeDoHead from "./pages/WhatWeDo/WhatWeDoSections/WhatWeDoHead";

const App = () => {
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
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Header slides={slides} />} />
          <Route path= "/AboutHead" element={<Head />} />
          <Route path="/WhatHead" element={<WhatWeDoHead />}  />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Values" element={<Values />} />
        </Routes>
      </BrowserRouter>
      <ValueApp />
      <Values />
      {/* <Head /> */}
    </div>
  );
};

export default App;
