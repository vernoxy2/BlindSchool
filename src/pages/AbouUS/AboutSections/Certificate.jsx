import React from "react";
import certificateImg from "../../../assets/AboutUsImgs/Certificate/certificateImg.webp";
import BaseLine from "../../../component/BaseLine";
import { FaRegCheckCircle } from "react-icons/fa";

const Certificate = () => {
  const list = [
    {
      id: 1,
      title: "Registered under the Bombay Public Trust Act, 1950",
    },
    {
      id: 2,
      title: "Affiliated with the National Association for the Blind, India",
    },
    {
      id: 3,
      title:
        "Recognized by the Ministry of Social Justice and Empowerment, Government of India",
    },
    {
      id: 4,
      title:
        "Certified under 80G and 12A of the Income Tax Act (for tax-exempt donations)",
    },
    {
      id: 5,
      title:
        "Supported by ASHA for Education (USA) and other international partners",
    },
  ];

  return (
    <section className=" py-16 container">
      {/* <div className="container mx-auto  border border-purple-800"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start ">
          {/* LEFT IMAGE */}
          <div className="lg:w-11/12 h-full flex flex-col justify-center">
            <img
              src={certificateImg}
              alt="img2"
              className="w-full max-h-auto object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="container px-0 md:px-7 lg:px-0 flex flex-col justify-center gap-3 md:gap-5 h-full">
            <h1 className="text-primary font-bold text-start ">
              Certificate and <br /> accreditations
            </h1>

            <p className="text-start ">
              Transparency and accountability are at the heart of everything we
              do. Valsad National Association for the Blind (NAB), Gujarat
              operates as a registered non-profit organization under Indian law
              and is affiliated with recognized national bodies supporting the
              welfare of the visually and physically challenged.
            </p>

            <div className="space-y-4 xl:space-y-6">
              <h2 className="font-bold  ">
                Our key registrations and recognitions include
              </h2>

              <BaseLine className="" />

              <ul className="space-y-3 xl:space-y-5">
                {list.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <FaRegCheckCircle
                      className="text-primary min-w-5 mt-2"
                      size={18} // FIXED ICON SIZE
                    />
                    <span className="leading-snug">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      {/* </div> */}
    </section>
  );
};

export default Certificate;
