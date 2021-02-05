import React, {useContext, useState} from "react";
import { GardenSizeContext } from "../../GardenSizeContext";
import { SizeModifierBlock } from "../../styled-components/GardenPlanner.styles";

const SizeModifier = () => {
  const [width, setWidth] = useState<Number>(0)
  const [height, setHeight] = useState<Number>(0)
  const [setSize] = useContext(GardenSizeContext);

  const onClickHandler = () => {
    setSize({width: width, height: height})
  }
  const widthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(e.target.value))
  }
  const heightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value))
  }
  
  return (
    <SizeModifierBlock>
      <div>
        <span>Width: </span>
        <input type="number" onChange={event => widthChange(event)} />
      </div>
      <div>
        <span>Heigth: </span>
        <input type="number" onChange={event => heightChange(event)} />
      </div>
      <button onClick={onClickHandler}>Set</button>
    </SizeModifierBlock>
  );
};

export default SizeModifier;
