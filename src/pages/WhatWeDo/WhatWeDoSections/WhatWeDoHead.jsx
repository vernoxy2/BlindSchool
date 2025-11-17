import React from 'react'
import Doimage from "../../../assets/HomepageImgs/WhatWedo.png"

const WhatWeDoHead = () => {
  return (
    <section style={{ backgroundImage: `url(${Doimage})` }}
         className="py-60 bg-cover bg-center bg-no-repeat lg:h-screen max-h-[800px]"
       >
         <div className="container grid grid-cols-1 md:grid-cols-2">
           <div className="space-y-5 w-[80%] text-black">
           {/* aaaaaa */}
           </div>
         </div>
       </section>
  )
}

export default WhatWeDoHead
