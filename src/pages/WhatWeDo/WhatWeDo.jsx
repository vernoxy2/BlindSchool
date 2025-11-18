import React from 'react'
import Head from './WhatWeDoSections/Head';
import WhatWeDoDiff from './WhatWeDoSections/WhatWeDoDiff';
import Card from './WhatWeDoSections/card';
import GetInvolved from './WhatWeDoSections/GetInvolved';
import Help from '../Homepage/HomePageSections/Help';
import SocialPage from '../Homepage/HomePageSections/SocialPage';

const WhatWeDo = () => {
  return (
    <div>
      <Head />
      <WhatWeDoDiff />
      <Card />
      <GetInvolved/>  
      <Help />  
      <SocialPage />  
    </div>
  )
}

export default WhatWeDo
