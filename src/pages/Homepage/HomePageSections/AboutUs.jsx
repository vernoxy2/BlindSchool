import React from "react";
import AboutUsImg from "../../../assets/HomepageImgs/MaskGroup.png";
import About from "../../../assets/HomepageImgs/About.png";

const Aboutus = () => {
  return (
    <section
      style={{ backgroundImage: `url(${AboutUsImg})` }}
      className="bg-cover"
    >
      <div className="container">
        <h1 data-aos="fade-up" className="">
          About us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-14 gap-y-8 ">
          {/* col-1 */}
          <div className="space-y-5 md:w-11/12 xl:w-9/12 order-2 lg:order-1">
            <h1 data-aos="fade-right" className="text-primary font-black  text-start ">
              Together, We Create Brighter Futures
            </h1>
            <p data-aos="fade-right" className="md:text-sm ">
              Valsad National Association for the Blind (NAB), Gujarat is more
              than just an organization — it’s a home to over 190 visually and
              physically challenged individuals who learn, grow, and live
              together with dignity and independence.
            </p>
            <p data-aos="fade-right" className="md:text-sm">
              Founded in 1984, NAB Valsad provides free education, vocational
              training, accommodation, healthcare, food, and emotional support,
              empowering students to build confidence and 21st-century skills.
              With the love of our dedicated staff and the generosity of our
              donors, we continue to create a nurturing community where every
              life shines with hope and possibility.
            </p>
          </div>
          {/* col-2 */}
          <div data-aos="fade-left" className="flex flex-col justify-center order-1 lg:order-2">
            <img src={About} alt="about"  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
