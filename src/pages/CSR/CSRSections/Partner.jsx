import React from 'react'
import PartnerImg from '../../../assets/CSRPageImgs/PartnerImg.webp'
import BaseLine from '../../../component/BaseLine'

const Partner = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col gap-6 items-start justify-center">
        <h1 className="font-bold text-start  lg:w-[90%]">
          Why Partner <br />with Us </h1>
        <p className="lg:w-[90%]">
         When you support NAB Valsad through your Corporate Social Responsibility (CSR) initiatives, you become a part of a trusted institution built on years of commitment and compassion. Your partnership will contribute to our efforts while showcasing your organization's values of empathy, integrity, and social responsibility.
        </p>
        <BaseLine className="mx-0" />
      </div>
      <div>
        <img src={PartnerImg} alt="" />
      </div>
    </div>
  )
}

export default Partner
