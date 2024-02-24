import styled from "styled-components";
import Theme from "../../global/styles/theme";

export const Projects=styled.div`
    min-height:100vh;
    height:auto;
    display:flex;
    align-items:center;
    flex-direction:column;
    background-color:${props=>props.theme==="light"?Theme.lightTheme.background:Theme.darkTheme.background};
    gap:3em;
`
export const Title=styled.h1`
    color:${Theme.lightTheme.blue};
    font-size:5em;
    margin-top:100px;
    text-align:center;
    @media (max-width:950px) {
        font-size:3em;
        
    }

`
export const Text=styled.h2`
    color:${Theme.lightTheme.blue};
    font-size:1em;
    width:600px;
`
export const Container=styled.div`
display:grid;
width:100%;
grid-template-columns:repeat(3,1fr);
grid-template-rows:repeat(2,300px);
gap:30px;
margin-bottom:40px;
@media (max-width:950px){
    grid-template-columns:repeat(2,1fr);
    
}
@media (max-width:800px){
    grid-template-columns:1fr;
}
`