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
            scroll(1);
        }, 10000)
        return () => {
            clearInterval(repeat);
        }
    }, [])


    function leftButtonHandler() {
       scroll(-1);
    }


    function rightButtonHandler() {

       scroll(1);
    }

    //direction: -1 left 1 right
    function scroll(direction: number) {
        let conveyor = document.getElementById("conveyor");
        let leftElement = conveyor?.querySelector(".left");
        let centerElement = conveyor?.querySelector(".center");
        let rightElement = conveyor?.querySelector(".right");
        let classes: string[];
        
        
        let content:any;
        
        if (direction < 0) {
            content = leftElement?.querySelector(".content");
            classes = ["right", "left", "none", "center", "hidden"]
        } else {
            content = rightElement?.querySelector(".content");
            classes = ["left", "center", "hidden", "right", "none"]
        }
        
        changeItemIndex(direction);
        if (content) content.textContent = items[itemIndex];


        centerElement?.classList.add(classes[0]);
        centerElement?.classList.add("hidden");
        centerElement?.classList.remove("center")

        rightElement?.classList.add(classes[1])
        rightElement?.classList.remove("right")
        rightElement?.classList.remove(classes[2])

        leftElement?.classList.add(classes[3])
        leftElement?.classList.remove("left")
        leftElement?.classList.remove(classes[4])
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
                            {items[itemIndex]}
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

