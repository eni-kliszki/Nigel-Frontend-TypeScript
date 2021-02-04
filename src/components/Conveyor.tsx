//styles
import { ConveyorContainer,
        NextButton,
        PrevButton,
        ConveyorItem,
        ConveyorItemContent,
        ConveyorItemImage,
} from "../styled_components/Conveyor.styles";
//react
import { useState } from "react";

export const Conveyor = (props : object) => {
    const [ visibleItem, setVisibleItem ] = useState<Object>();

    return(
        <ConveyorContainer>
            <PrevButton/>
            <ConveyorItem>
                <ConveyorItemContent>
                    Here comes the very great and catch message that makes you click on the article
                </ConveyorItemContent>
                <ConveyorItemImage>
                    This is an image despite appaering to be a pink rectangle
                </ConveyorItemImage>
            </ConveyorItem>
            <NextButton/>
        </ConveyorContainer>
    );
}