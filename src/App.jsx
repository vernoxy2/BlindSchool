
import React from 'react'
import Header from './pages/Homepage/Header'
import Aboutus from './pages/Homepage/AboutUs'
import Help from './pages/Homepage/Help'

const App = () => {
  return (
    <div className=''>
      <Header children={"head"}/>
      <Aboutus/>
      <Help/>
    </div>
   
  )
}

export default App
