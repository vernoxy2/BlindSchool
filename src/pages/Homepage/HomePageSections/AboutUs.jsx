import React from "react";
import AboutUsImg from "../../../assets/HomepageImgs/MaskGroup.png";
import About from "../../../assets/HomepageImgs/About.png";

const Aboutus = () => {
  return (
    <div
      style={{ backgroundImage: `url(${AboutUsImg})` }}
      className="bg-cover py-28"
    >
      <div className="container">
        <h1 className="">
          About us
        </h1>
        <div className="grid grid-cols-2 py-14">
          {/* col-1 */}
          <div className="space-y-5 w-9/12 ">
            <p className="text-primary font-black  md:text-3xl flex-1 ">
              Together, We Create Brighter Futures
            </p>
            <p className="md:text-sm ">
              Valsad National Association for the Blind (NAB), Gujarat is more
              than just an organization — it’s a home to over 190 visually and
              physically challenged individuals who learn, grow, and live
              together with dignity and independence.
            </p>
            <p className="md:text-sm">
              Founded in 1984, NAB Valsad provides free education, vocational
              training, accommodation, healthcare, food, and emotional support,
              empowering students to build confidence and 21st-century skills.
              With the love of our dedicated staff and the generosity of our
              donors, we continue to create a nurturing community where every
              life shines with hope and possibility.
            </p>
          </div>
          {/* col-2 */}
          <img src={About} alt="about" />
          <div>{/* <img src="About.png" alt="" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
