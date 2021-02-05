import React from "react";
import { GardenPlannerPage } from "./styled-components/GardenPlanner.styles";
import Garden from "./garden/Garden";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import { GardenSizeProvider } from "./GardenSizeContext";

const GardenPlanner = () => {
  return (
    <GardenPlannerPage>
      <GardenSizeProvider>
        <Garden />
        <Sidebar />
        <Footer />
      </GardenSizeProvider>
    </GardenPlannerPage>
  );
};

export default GardenPlanner;
