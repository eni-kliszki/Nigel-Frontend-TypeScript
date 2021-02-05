//styles
import { ConveyorContainer,
        NextButton,
        PrevButton,
        ConveyorItem,
        ConveyorItemContent,
        ConveyorItemImage,
} from "../styled_components/Conveyor.styles";
//react
import { useEffect } from "react";

export const Conveyor = (props : object) => {
    let items:string[];
    let itemIndex: number = 0;
    items = ["First", "Second", "Third", "Fourth", "Fifth"]

    const initClassNames:string[] = ["center", "left hidden", "right hidden"];


    useEffect(() => {
        const repeat = setInterval(() => {
            rightButtonHandler();
        }, 10000)
        return () => {
            clearInterval(repeat);
        }
    }, [props])


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
            {initClassNames.map((classNames: string) => {
                return (
                    <ConveyorItem className={classNames}>
                    <   ConveyorItemContent className="content">
                        </ConveyorItemContent>

                        <ConveyorItemImage className="image">
                            This is a picture
                        </ConveyorItemImage>
                    </ConveyorItem>
                )
            })}

            <PrevButton onClick={leftButtonHandler}/>
            <NextButton onClick={rightButtonHandler}/>
        </ConveyorContainer>
    );
}

