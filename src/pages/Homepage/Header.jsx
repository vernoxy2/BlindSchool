import React from 'react'
import HeadImg from "../../assets/HomepageImgs/HeadImg.png"
import { CiHeart } from 'react-icons/ci'

const Header = () => {
  return (
    <div style={{backgroundImage: `url(${HeadImg})` }} className='bg-cover bg-center py-28'>
      <div className='space-y-5 w-1/2'>
      <h1 className='text-start md:text-6xl font-black text-white text-[64px] align-text-top ms-24'>YOUR SUPPORT CHANGES LIVES.</h1>
      <p className='text-start md:text-2xl text-white text-2xl ms-24 w-[80%]'>Help us provide food, education, and care to <span className='text-primary font-bold'>190+ visually</span> and physically challenged individuals.</p>
        <button class="rounded-full bg-primary font-black text-white flex gap-2 px-6 py-3 ms-24" > <span className='text-2xl'> <CiHeart/></span> Donate Now</button>
      <div>
      </div>
      </div>
    </div>
  )
}

export default Header
