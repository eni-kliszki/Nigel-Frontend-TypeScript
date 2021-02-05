import React from 'react'
import { SidebarBlock } from '../styled-components/GardenPlanner.styles';
import SizeModifier from './blocks/SizeModifier';

const Sidebar = () => {
  return (
    <SidebarBlock>
      <SizeModifier />
    </SidebarBlock>
  )
}

export default Sidebar
