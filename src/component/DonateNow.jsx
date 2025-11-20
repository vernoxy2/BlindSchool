import React from 'react';
import { FiHeart } from 'react-icons/fi';


const DonateNow = () => {
  return (
    <div className='bg-primary py-3 px-7 w-fit rounded-3xl flex items-center gap-2.5 mx-auto md:mx-0'>
      <FiHeart className='text-white text-xl'/>
        <p className='text-white font-bold'>Donate Now</p>
    </div>
  );
}

export default DonateNow;
