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
    const [ visibleItemIndex, setVisibleItemIndex ] = useState<number>();
    let items:string[];
    items = ["First", "Second", "Third", "Fourth", "Fifth"]

    //Alternating ConveyorItems (A, B or smthng) that should be filled 
    //when clicking navbutton and faded in while the other is getting faded out and  replaced or something like this
    //probably have to use Z-index aswell but it should be checked

    

    return(
        <ConveyorContainer>
            <PrevButton/>
            <ConveyorItem>
                <ConveyorItemContent>
                    Here comes the very great and catchy message that makes you click on the article
                </ConveyorItemContent>
                <ConveyorItemImage>
                    This is an image despite appaering to be a pink rectangle
                </ConveyorItemImage>
            </ConveyorItem>
            <ConveyorItem className="hidden">
                <ConveyorItemContent>
                    You Shouldnt see this
                </ConveyorItemContent>
                <ConveyorItemImage>
                    This is an image despite appaering to be a pink rectangle
                </ConveyorItemImage>
            </ConveyorItem>
            <NextButton/>
        </ConveyorContainer>
    );
}