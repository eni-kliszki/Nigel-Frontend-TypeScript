import React from "react";
import { SizeModifierBlock } from "../../styled-components/GardenPlanner.styles";

const SizeModifier = () => {
  return (
    <SizeModifierBlock>
      <div>
        <span>Width: </span>
        <input type="text" />
      </div>
      <div>
        <span>Heigth: </span>
        <input type="text" />
      </div>
      <button>Set</button>
    </SizeModifierBlock>
  );
};

export default SizeModifier;
