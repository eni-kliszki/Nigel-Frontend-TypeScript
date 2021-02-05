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
    let items:string[];
    let itemIndex: number = 0;
    items = ["First", "Second", "Third", "Fourth", "Fifth"]

    //Alternating ConveyorItems (A, B or smthng) that should be filled 
    //when clicking navbutton and faded in while the other is getting faded out and  replaced or something like this
    //probably have to use Z-index aswell but it should be checked

    // add left and right classes that hide the div outside and then it can float in
    

    function leftButtonHandler(event: any) {
        event.preventDefault();
        let conveyor = document.getElementById("conveyor");
        let leftElement = conveyor?.querySelector(".left");
        let centerElement = conveyor?.querySelector(".center");
        let rightElement = conveyor?.querySelector(".right");

        centerElement?.classList.add("right");
        centerElement?.classList.add("hidden");
        centerElement?.classList.remove("center")

        leftElement?.classList.add("center")
        leftElement?.classList.remove("left")
        leftElement?.classList.remove("hidden")

        rightElement?.classList.add("left")
        rightElement?.classList.remove("right")

    }

    function rightButtonHandler(event: any) {
        event.preventDefault();
        
    }
    

    return(
        <ConveyorContainer id="conveyor">
            <ConveyorItem className="center">
                <ConveyorItemContent className="content">
                    Here comes the very great and catchy message that makes you click on the article
                </ConveyorItemContent>
                <ConveyorItemImage className="image">
                    This is an image despite appaering to be a pink rectangle
                </ConveyorItemImage>
            </ConveyorItem>
            <ConveyorItem className="left hidden">
                <ConveyorItemContent className="content">
                   This is the left
                </ConveyorItemContent>
                <ConveyorItemImage className="image">
                    This is an image despite appaering to be a pink rectangle
                </ConveyorItemImage>
            </ConveyorItem>
            <ConveyorItem className="right hidden">
                <ConveyorItemContent className="content">
                    this is the right
                </ConveyorItemContent>
                <ConveyorItemImage className="image">
                    This is an image despite appaering to be a pink rectangle
                </ConveyorItemImage>
            </ConveyorItem>
            <PrevButton onClick={leftButtonHandler}/>
            <NextButton onClick={rightButtonHandler}/>
        </ConveyorContainer>
    );
}