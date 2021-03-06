import styled from "styled-components";

export const ConveyorContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 50vh;
    background-color: #52B788;
    overflow: hidden;
;

`

export const NextButton = styled.div`
    position: absolute;
    right: 2%;
    top: 30%;
    width: 5%;
    height: 40%;
    cursor: pointer;
    background-color: red;         //TEMP
    z-index: 1;
`

export const PrevButton = styled.div`
    position: absolute;
    left: 2%;
    top: 30%;
    width: 5%;
    height: 40%;
    cursor: pointer;
    background-color: red;         //TEMP
    z-index: 1;

`

export const ConveyorItem = styled.div`
    position: absolute;
    top: 5%;
    left: 10%;
    width: 80%;
    height: 90%;
    z-index: 1;
    transition: 500ms;
    opacity: 100%;
    background-color: yellowgreen;    //TEMP
    &.left {
        left: -100%;
        transition: 500ms;
    };
    &.right {
        left: 100%;
        transition: 500ms;
    };
    &.hidden {
        opacity: 0;
    }

`

export const ConveyorItemContent = styled.div`
    position: absolute;
    top: 5%;
    left: 0;
    width: 50%;
    height: 90%;
    font-size: 300%;
    text-align: justify;
    background-color: lightblue;      //TEMP
`

export const ConveyorItemImage = styled.div`
    position: absolute;
    top: 5%;
    right: 0;
    width: 50%;
    height: 90%;
    background-color: pink;           //TEMP
`