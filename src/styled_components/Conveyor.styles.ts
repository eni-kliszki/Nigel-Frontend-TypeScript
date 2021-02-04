import styled from "styled-components";

export const ConveyorContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 50vh;
    background-color: #52B788;
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
`

export const PrevButton = styled.div`
    position: absolute;
    left: 2%;
    top: 30%;
    width: 5%;
    height: 40%;
    cursor: pointer;
    background-color: red;         //TEMP
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
    &.hidden {
        z-index: 0;
        opacity: 0;
        transition: 500ms;
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