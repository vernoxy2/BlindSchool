import React from "react";
import HelpImg from "../../assets/HomepageImgs/HelpImg.png";
import { CiHeart } from 'react-icons/ci';

const Help = () => {
  return (
    <div
      style={{ backgroundImage: `url(${HelpImg})` }}
      className="bg-cover bg-center py-28"
    >
      <div className="ms-24 space-y-5">
        <div className="">
          <p className="text-primary font-bold text-6xl w-5/12">
            SMALL HELP.<br/> BIG HOPE
          </p>
          <p className="text-black font-bold text-2xl w-4/12">
            Be part of someone’s brighter tomorrow.
          </p>
        </div>
        <button class="rounded-full bg-primary font-black text-white flex gap-2 px-6 py-3" > <span className='text-2xl'> <CiHeart/></span> Donate Now</button>
      </div>
    </div>
  );
};
export default Help;
