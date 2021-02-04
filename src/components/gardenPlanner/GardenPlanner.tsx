import React from 'react'
import { GardenPlannerPage } from './styled-components/GardenPlanner.styles';
import Garden from './garden/Garden';
import Sidebar from './sidebar/Sidebar';
import PlantContainer from './footer/PlantContainer';

const GardenPlanner = () => {
  return (
    <GardenPlannerPage>
      <Garden />
      <Sidebar />
      <PlantContainer />
    </GardenPlannerPage>
  )
}

export default GardenPlanner
