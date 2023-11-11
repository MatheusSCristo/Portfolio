import styled from 'styled-components'
import Theme from '../../global/styles/theme'

export const Footer = styled.footer`
height:max-content;
background-color:${Theme.lightTheme.footer};
display:flex;
flex-direction:column;
align-items:center;
`
export const Title = styled.h1`
padding:5px;
font-size:1.5em;
color:${Theme.lightTheme.white};
font-weight:100;
text-align:center;
@media (max-width:950px){
    font-size:1em;
}
`
export const Text = styled.h2`
font-size:1em;
color:${Theme.lightTheme.white};
font-weight:100;
margin:10px;
@media (max-width:950px){
    font-size:0.8em;
}
`
export const Container = styled.div`
display:flex;
justify-content:space-evenly;
width:100%;
`