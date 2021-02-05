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

    

    function leftButtonHandler() {
        let conveyor = document.getElementById("conveyor");
        let leftElement = conveyor?.querySelector(".left");
        let centerElement = conveyor?.querySelector(".center");
        let rightElement = conveyor?.querySelector(".right");

        changeItemIndex(-1);

        let content = leftElement?.querySelector(".content");
        if (content) content.textContent = items[itemIndex];

        centerElement?.classList.add("right");
        centerElement?.classList.add("hidden");
        centerElement?.classList.remove("center")

        leftElement?.classList.add("center")
        leftElement?.classList.remove("left")
        leftElement?.classList.remove("hidden")

        rightElement?.classList.add("left")
        rightElement?.classList.remove("right")

    }

    function rightButtonHandler() {
        let conveyor = document.getElementById("conveyor");
        let leftElement = conveyor?.querySelector(".left");
        let centerElement = conveyor?.querySelector(".center");
        let rightElement = conveyor?.querySelector(".right");

        changeItemIndex(1);

        let content = rightElement?.querySelector(".content");
        if (content) content.textContent = items[itemIndex];

        centerElement?.classList.add("left");
        centerElement?.classList.add("hidden");
        centerElement?.classList.remove("center")

        rightElement?.classList.add("center")
        rightElement?.classList.remove("right")
        rightElement?.classList.remove("hidden")

        leftElement?.classList.add("right")
        leftElement?.classList.remove("left")
    }

    function changeItemIndex(change: number) {
        if (itemIndex + change > items.length - 1) {
            itemIndex = 0;
        } else if (itemIndex + change < 0) {
            itemIndex = items.length -1;
        } else {
            itemIndex += change;
        }
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