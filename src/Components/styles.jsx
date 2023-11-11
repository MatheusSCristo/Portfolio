import styled from "styled-components";
import theme from "../global/styles/theme"

export const Bar = styled.div`
position:fixed;
z-index:1;
height:10vh;
width:100%;
border-bottom:1px solid ${props=>props.theme==="light"?"black":"white"};
display:flex;
justify-content:space-between;
align-items:center;
background-color:${props=>props.theme==="dark"?"#72727219":"#ffffff66"};
@media (max-width:950px){
    position:relative;
    background-color:${props=>props.theme==="dark"?theme.darkTheme.background:theme.lightTheme.background};
    
       
    }
`

export const TitleBlue = styled.h1`
    color:${theme.lightTheme.blue};
    font-size:1.5em;
    margin-left:1em;
    @media (max-width:950px){
       font-size:3vw
    }
    `
export const text = styled.span`
    color:${props => props.theme === "light" ? theme.lightTheme.grey : theme.darkTheme.white};
    font-size:em;
    text-decoration:none;
    margin:0 10px;
    
    &:hover{
        border-bottom:2px solid ${props => props.theme === "light" ? theme.lightTheme.grey : theme.darkTheme.white};
        
    }
    @media (max-width:950px){
       font-size:0.8 em;
       margin:0 2px;
    }


`
export const LinkText=styled.h3`
    color:${props => props.theme === "light" ? theme.lightTheme.grey : theme.darkTheme.black};
    font-size:1em;
    font-weight:100;
    text-decoration:none;
`

export const Wrapper = styled.div`
        position:relative;
        background-color:${props => props.theme === "light" ? theme.lightTheme.background : theme.darkTheme.background};
        margin:auto;
        width:80%;
        border:1px solid ${props=> props.theme === "light" ? theme.lightTheme.black : theme.darkTheme.white};
        border-radius:5px;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;

    `

export const Image = styled.div`
        width:80%;
        border-radius:5px;
        height:100%;
        margin:10px auto;
        background-image:url(${props=>props.$image});
        background-size:cover;
        
    `
export const Title = styled.h1`
    color:${theme.lightTheme.blue};
    font-size:1.5em;
    text-align:center;
    margin-top:10px;

`
export const LinkWrapper = styled.div`
    width:100px;
    height:30px;
    background-color:${theme.lightTheme.white};
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin:10px;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    cursor:pointer;
    bottom:${props=>props.$bottom};

    &:hover {
        background-color:#c9c9c9
    }
    `
export const Container = styled.div`
    display:flex;
    justify-content:${(props) => props.content};
    align-items:${(props) => props.$align};
    flex-direction:${(props) => props.direction};
    width:${(props) => props.width};
    @media (max-width:950px){
       flex-direction:${(props) => props.$querydirection};
       align-items:center;
       margin:10px;
    }
    
    `

export const Info=styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
    background-color:#ffffffde;
    border-radius:5px; 

`
export const infos = styled.span`
    color:#000;
    text-decoration:none;
    font-size:0.8em;
    margin:0 10px;
`