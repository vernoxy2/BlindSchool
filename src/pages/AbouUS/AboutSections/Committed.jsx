import React from "react";
import SpiritualBlindness from "../../../assets/AboutUsImgs/Commited/SpiritualBlindness.png";
import img2 from "../../../assets/AboutUsImgs/Commited/img2.png";

const Committed = () => {
  return (
    <section
      style={{ backgroundImage: `url(${SpiritualBlindness})` }}
      className="bg-cover bg-center bg-no-repeat "
    >
      <div className="container">
        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 py-14 gap-y-10">
          {/* text */}
          <div className="space-y-3 md:space-y-5 order-2 lg:order-1">
            <h1 className="text-primary font-bold text-start">
              Committed to Making a Difference
            </h1>
            <p className=" xl:w-[90%]">
              At Valsad National Association for the Blind (NAB), Gujarat, we
              believe that blindness or physical disability should never limit a
              person’s dreams. For over four decades, we’ve been creating a
              nurturing space where courage, learning, and independence thrive
              every single day.
            </p>
            <p className="  lg:w-[90%]">
              Our campus is filled with stories of resilience — of students who
              learn to read Braille for the first time, who master computers
              through sound, who play cricket guided only by hearing, and who
              step into the world with new confidence. Here, education is more
              than academics; it’s the art of living with dignity.
            </p>
            <p className="  lg:w-[90%]">
              Behind every success story stands a team of dedicated teachers,
              caregivers, and volunteers who work tirelessly to guide our
              students through both challenges and triumphs. Together, we build
              not just skills but a community rooted in compassion, inclusion,
              and possibility.
            </p>
            <p className=" lg:w-[90%]">
              At NAB Valsad, every life is a story of transformation — from
              limitation to liberation, from dependence to independence, and
              from darkness to light.
            </p>
          </div>
          {/* img */}
          <div className="order-1 lg:order-2 flex flex-col justify-center md:w-5/6 xl:w-full mx-auto">
            <img src={img2} alt="img2" className=" lg:ml-auto" />
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Committed;
