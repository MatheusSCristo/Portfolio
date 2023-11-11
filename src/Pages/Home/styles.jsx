import styled from "styled-components";
import theme from "../../global/styles/theme";


export const Page = styled.div`
    background-color:${props => props.theme === "light" ? theme.lightTheme.background : theme.darkTheme.background};
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    @media (max-width:950px){
        height:40vh;
        width:100vw
    }
`

export const Mobile=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    height:max-content;
    @media (max-width:950px){
        margin-top:1em;
    }
`
export const Title = styled.h1`
     color:${props => {
        if (props.color){
            return props.color}
        else{
            return props.theme === "light" ? theme.lightTheme.black : theme.darkTheme.white}
    }
    };
    font-size:5em;
    font-weight:100;
    @media (max-width:950px){
        font-size:2em;
    }

`

export const Text = styled.h2`
    color:${props => props.theme === "light" ? theme.lightTheme.grey : theme.darkTheme.white};
    font-size:1em;
    font-weight:100;
    text-align:center;
    @media (max-width:950px) {
        font-size:0.9em;
    }
`
export const LinkText=styled.h3`
    color:${props => props.theme === "light" ? theme.lightTheme.grey : theme.darkTheme.black};
    font-size:1em;
    font-weight:100;
`

export const LinkWrapper = styled.div`
    width:130px;
    height:30px;
    background-color:${theme.lightTheme.white};
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin:20px;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;

    &:hover {
        background-color:#c9c9c9

    }
    
`
export const Image = styled.img`
    width:${props => props.width};
    height:auto;
    padding:2px;
`

export const Container = styled.div`
display:flex;
justify-content:${(props) => props.content};
align-items:${(props) => props.align};
flex-direction:${(props) => props.direction};

`