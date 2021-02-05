import styled from "styled-components";

export const Nav = styled.nav`
    z-index: 2;
    width: 100%;
    height: 70px;
    top: 0;
    left: 0;
    position: fixed;
    background-color: #1B4332;
    display: flex;
    overflow: hidden;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    .nigel-logo{
        font-size: 36px;
        padding-left: 5%;
    }
`

export const RightSide = styled.div`
`

export const LeftSide = styled.div`
    
`

export const LinkContainer = styled.div`
    margin-bottom: 10px;
`

export const Link = styled.a`
    text-decoration: none;
    color: #EAF4DC;
    padding-right: 5%;
    font-size: 20px;
`