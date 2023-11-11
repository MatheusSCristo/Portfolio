import styled from "styled-components"
import theme from "../global/styles/theme"

export const Box = styled.div`
    position:absolute;
    right:0px;
    top:5px;
    width:100px;
    height:max-content;
    margin:10px;
    background-color:${props=>props.theme==="dark"?theme.darkTheme.background:theme.lightTheme.background};
    border:1px solid ${props=>props.theme==="dark"?theme.darkTheme.white:theme.lightTheme.black};
    border-radius:5px;
    
`
export const text=styled.h1`
    font-size:1em;
    color:${props=>props.theme==="dark"?theme.darkTheme.white:theme.lightTheme.black};
    font-weight:100;
`
export const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const Image=styled.img`
    position:absolute;
    right:0;
    cursor: pointer;
    
`
export const ImageW=styled.img`
    position:absolute;
    right:0;
    cursor: pointer;
    
`