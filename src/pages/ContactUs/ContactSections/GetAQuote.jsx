import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const GetAQuote = () => {
  return (
    <section className="w-full  justify-center">
      <div className="shadow-lg py-10 container">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          {/* left div */}
          <div className="py-10 bg-primary w-5/6 mx-0 border border-primary ">
            <div className="bg-primary border">
              <h2 className="text-white text-4xl font-bold mx-auto text-center p-5 bg-primary ">
                Contact Information
              </h2>
              <hr className="my-7 border-white" />
            </div>
            <div className="px-10 py-5">
              {/* Address */}
              <div className="bg-white text-black rounded-lg p-4 mb-4 flex gap-4 item-center">
                <MdLocationOn
                  className=" text-white bg-primary flex justify-center items-center rounded-sm"
                  size={49}
                />
                <div className="">
                  <h3 className="font-bold text-lg text-primary">Address</h3>
                  <p className="text-sm">
                    Civil Hospital Road, Nanakwada, Valsad - <br /> 396001
                    Gujarat (India)
                  </p>
                </div>
              </div>

              {/* Contact Number */}
              <div className="bg-white text-black rounded-lg p-4 mb-4 flex gap-4 items-start">
                <MdPhone
                  className="text-white bg-primary flex justify-center items-center rounded-sm"
                  size={49}
                />
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    Contact Number
                  </h3>
                  <p className="text-sm">+91 9909006502</p>
                  <p className="text-sm">(02632) 251459, 651164</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white text-black rounded-lg p-4 flex gap-4 items-start">
                <MdEmail
                  className="text-white bg-primary flex justify-center items-center rounded-sm"
                  size={49}
                />
                <div>
                  <h3 className="font-bold text-lg text-primary">Email</h3>
                  <p className="text-sm underline">nabvalsad@gmail.com</p>
                  <p className="text-sm underline">valsadnab@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* righ div */}
          <div className="py-10">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Get A Quote
            </h2>
            <form className="flex flex-col gap-5 p-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3 hover:border-primary  hover:text-primary"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3  hover:border-primary"
              />

              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-full border rounded-lg p-3  hover:border-primary"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg p-3  hover:border-primary"
              />

              <button
                type="submit"
                className="bg-primary  hover:border-primary text-white py-4 rounded-lg font-semibold text-lg"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAQuote;
