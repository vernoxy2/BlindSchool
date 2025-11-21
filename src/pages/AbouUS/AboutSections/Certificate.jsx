import React from "react";
import certificateImg from "../../../assets/AboutUsImgs/Certificate/certificateImg.png";
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
    <section className="w-full py-16 container">
      {/* <div className="container mx-auto  border border-purple-800"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start ">
          {/* LEFT IMAGE */}
          <div className=" justify-center md:justify-start max-w-xl">
            <img
              src={certificateImg}
              alt="img2"
              className="w-full max-h-auto object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-10  max-w-xl">
            <h1 className="text-primary font-bold text-start text-4xl ">
              Certificate and accreditations
            </h1>

            <p className="text-start mt-4 ">
              Transparency and accountability are at the heart of everything we
              do. Valsad National Association for the Blind (NAB), Gujarat
              operates as a registered non-profit organization under Indian law
              and is affiliated with recognized national bodies supporting the
              welfare of the visually and physically challenged.
            </p>

            <div className="text-start mt-6">
              <h2 className="font-bold text-2xl ">
                Our key registrations and recognitions include
              </h2>

              <BaseLine className="ms-0 my-3" />

              <ul className="mt-6 space-y-4">
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
