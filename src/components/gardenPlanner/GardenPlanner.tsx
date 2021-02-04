import React from 'react'
import { GardenPlannerPage } from './styled-components/GardenPlanner.styles';
import Garden from './garden/Garden';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';

const GardenPlanner = () => {
  return (
    <GardenPlannerPage>
      <Garden />
      <Sidebar />
      <Footer />
    </GardenPlannerPage>
  )
}

export default GardenPlanner
