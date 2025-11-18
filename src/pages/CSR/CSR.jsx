import React from 'react'
import CSRHead from './CSRSections/CSRHead'
import JoinHandsCSR from './CSRSections/JoinHandsCSR'
import Partner from './CSRSections/Partner'
import MakeDiff from './CSRSections/MakeDiff'
import ImpactMatters from './CSRSections/ImpactMatters'
import DreamOfSociety from './CSRSections/DreamOfSociety'
import Help from './../Homepage/HomePageSections/Help'
import SocialPage from './../Homepage/HomePageSections/SocialPage'

const CSR = () => {
  return (
    <div>
      <CSRHead /> 
      <JoinHandsCSR />
      <Partner />
      <MakeDiff />
      <ImpactMatters />
      <DreamOfSociety />  
      <Help />
      <SocialPage />
    </div>
  )
}

export default CSR
