import React, {createContext, useState} from "react";
import { GardenSize } from './garden/GardenSizeInterface';

export const GardenSizeContext = createContext<any>({});

export const GardenSizeProvider: React.FC = ({ children }) => {
  const [size, setSize] = useState<GardenSize>({width: 100, height: 100})

  return (
    <GardenSizeContext.Provider value={[size, setSize]}>
      {children}
    </GardenSizeContext.Provider>
  )

}