import styled from "styled-components";
import theme from "../../global/styles/theme";

export const About = styled.div`
    height:100vh;
    background-color:${props => props.theme === "light" ? theme.lightTheme.background : theme.darkTheme.background};
    display:flex;
    justify-content:center;
    align-items:center;
    
`
export const ImageWrapper = styled.div`
    height:500px;
    width:500px;
    border-radius:100%;
    margin-left:10%;
    background-image:url("./imgs/photo.png");
    background-size: cover;
    @media (max-width:950px){
    height:300px;
    width:300px;
    
    }
`
export const Title = styled.h1`
    color:${theme.lightTheme.blue};
    font-size:5em;
    margin:0 auto;
    @media (max-width:950px){
    font-size:2em;
    }
`
export const Text = styled.h2`
    color:${props => props.theme === "light" ? theme.lightTheme.grey : theme.darkTheme.white};
    font-size:1em;
    font-weight:100;
    text-align:center;
`
export const Container = styled.div`
display:flex;
justify-content:${(props) => props.content};
align-items:${(props) => props.$align};
flex-direction:${(props) => props.direction};
width:${(props) => props.width};
@media (max-width:950px){
    flex-direction:column;
    align-items:center;
    }
    

`
