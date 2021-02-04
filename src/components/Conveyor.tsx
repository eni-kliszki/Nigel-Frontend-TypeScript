//styles
import { ConveyorContainer,
        ArrowButton,
        ConveyorItem,
} from "../styled_components/ConveyorStyles";
//react
import { useState } from "react";

export const Conveyor = (props) => {
    const [ visibleItem, setVisibleItem ] = useState<Object>();

    return(
        <ConveyorContainer>
            <ConveyorItem></ConveyorItem>
        </ConveyorContainer>
    );
}