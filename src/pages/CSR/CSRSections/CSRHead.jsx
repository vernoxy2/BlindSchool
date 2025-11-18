import React from 'react';
import GeminiImg from "../../../assets/HomepageImgs/Gemini.png"

const CSRHead = () => {
  return (
   <section style={{ backgroundImage: `url(${GeminiImg})` }}
          className="py-60 bg-cover bg-center bg-no-repeat lg:h-screen max-h-[800px]"
        >
          <div className="container grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-5 w-[80%] text-black">
            
            </div>
          </div>
        </section>
  )
}

export default CSRHead
