import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import BaseLine from "../../../component/BaseLine";

const Data = [
  {
    id: 1,
    icon: <MdLocationOn />,
    name: "Address",
    text: "Civil Hospital Road,Nanakwada, Valsad - 396001 Gujarat (India)",
  },
  {
    id: 2,
    icon: <MdPhone />,
    name: "Phone",
    text: ["+91 9909006502", "(02632) 251459, 651164"],
  },
  {
    id: 3,
    icon: <MdEmail />,
    name: "Email",
    text: ["nabvalsad@gmail.com", "valsadnab@gmail.com"],
  },
];

const GetAQuote = () => {
  return (
    <section className="container">
      <div className="shadow-2xl py-16 grid grid-cols-1 md:grid-cols-2 rounded-md">
        {/* Contact Information div */}
        <div className="bg-primary w-4/6 mx-auto px-8 py-10 flex flex-col gap-3 rounded">
          <h2 className="text-white text-4xl font-bold mx-auto text-center bg-primary ">
            Contact Information
          </h2>
          <BaseLine className="bg-white w-full" />
          <div className="py-8 space-y-5">
            {Data.map((item) => (
              <div
                key={item.id}
                className="bg-white text-black rounded-md p-4  flex gap-4 items-center"
              >
                <div className="text-white bg-primary text-4xl p-1.5 flex justify-center items-center rounded-sm">
                  {item.icon}
                </div>
                <div className="">
                  <h3 className="font-bold text-lg text-primary">
                    {item.name}
                  </h3>
                  {Array.isArray(item.text) ? (
                    item.text.map((t, i) => <p key={i}>{t}</p>)
                  ) : (
                    <p>{item.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-5/6 space-y-5">
          <h1 className="text-primary font-bold mx-auto text-start  ">
            Get a Quote
          </h1>
          <form className="flex flex-col gap-7">
            <input
              type="text"
              placeholder="Your Name"
            />
            <input
              type="email"
              placeholder="Your Email"
            />
            <input
              type="phone"
              placeholder="Your Phone Number"
            />
            <textarea
              placeholder="Message"
              rows={6}     
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white  py-4 rounded-md uppercase text-2xl font-bold"
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
    
  );
};

export default GetAQuote;
