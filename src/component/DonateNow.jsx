import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DonateNow = ({ className = '', className2 = '', className3 = '', onClick }) => {
  return (
    <Link
      to="/donatenow"
       onClick={onClick}
      className={`bg-primary py-3 px-6 w-fit rounded-3xl flex items-center gap-2.5 mx-auto md:mx-0 
      transition-all duration-300 hover:scale-95 hover:shadow-lg active:scale-95 ${className}`}
    >
      <FiHeart className={`text-white text-xl ${className3}`} />
      <p className={`text-white font-bold ${className2}`}>Donate Now</p>
    </Link>
  );
};

export default DonateNow;
