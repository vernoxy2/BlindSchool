import React from "react";
import BaseLine from "../../../component/BaseLine";

const HowCanYouHelp = ({ cartDatas }) => {
  console.log(cartDatas); // <-- will show your array of 3 objects
  
  return (
    <div className="">
      <div className="container space-y-10">
        <h1 className="">How Can You Help?</h1>
        <p className="md:text-sm text-center m">
          Your Support Matters: Let's Transform the Lives of the Visually
          Impaired, Together
        </p>
        <BaseLine />
        <div className="container text-black">
          {cartDatas?.map((item) => (
            <div
              key={item.key}
              className="space-y-5 flex flex-col items-center justify-center shadow-lg p-9 hover:bg-primary group duration-500 transition-colors"
            >
              <img src={item.img} alt={item.MainText} className="w-16 h-16" />

              <h1 className=" text-xl font-bold text-primary md:text-2xl text-center uppercase group-hover:text-white duration-500 transition-colors">
                {item.MainText}
              </h1>

              <p className="text-black w-[93%] text-center group-hover:text-white duration-500 transition-colors">
                {item.SubText}
              </p>
               <BaseLine />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowCanYouHelp;