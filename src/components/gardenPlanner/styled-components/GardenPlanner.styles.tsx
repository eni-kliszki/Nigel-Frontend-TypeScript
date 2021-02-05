import styled from 'styled-components';

export const GardenPlannerPage = styled.div`
  background-color: #EAF4DC;
  width: 100vw;
  height: 100vh;
`

export const GardenContainer = styled.div`
  width: 40vw;
  height: 70vh;
  background-color: #8A5A44;
  position: absolute;
  top: 5%;
  left: 15%;
  border: 5px solid black;
  overflow: scroll;
`

export const SidebarBlock = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 20vw;
  height: 70vh;
  background-color: #A3B18A;
  color: white;
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`

export const PlantContainer = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100vw;
  height: 15vh;
  background-color: #1B4332;
`

export const Field = styled.div`
  width:50px;
  height:50px;
  border: 1px solid black;
  box-sizing: border-box;
`

export const SizeModifierBlock = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-around;
  background-color: #1B4332;
  input {
    width: 60px;
  }
`

export const FullField = styled.div<{width: number, height: number}>`
  position: relative;
  display: flex;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;

`
