import React from 'react';
import { FiHeart } from 'react-icons/fi';

const DonateNow = ({ className = '', className2 = '', className3 = '' }) => {
  return (
    <button
      className={`bg-primary py-3 px-7 w-fit rounded-3xl flex items-center gap-2.5 mx-auto md:mx-0 
      transition-all duration-300 hover:scale-95 hover:shadow-lg active:scale-95 ${className}`}
    >
      <FiHeart className={`text-white text-xl ${className3}`} />
      <p className={`text-white font-bold ${className2}`}>Donate Now</p>
    </button>
  );
};

export default DonateNow;
