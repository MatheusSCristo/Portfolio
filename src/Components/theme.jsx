import styled from "styled-components";

export const Container=styled.div`
    width:50px;
    height:20px;
    background-color:${props=>(props.theme==="light"?"#FFC061":"#FFF")};
    display:flex;
    border-radius:10px;
    justify-content:space-evenly;
    align-items:center;
    margin:10px;
    cursor:pointer;
    @media (max-width:950px){
        margin:0px;
    }
    
   
`
export const Circle=styled.div`
    width:15px;
    height:15px;
    border-radius:50%;
    background-color:${props=>(props.theme==="light"?"#FFF":"#000")};
`

export const Language=styled.div`
    width:40px;
    height:40px;
    background-image:url(${props=>(props.$language==="pt"?"/imgs/brasil.svg":"/imgs/eua.svg")});
    background-size:cover;
    margin:10px;
    cursor: pointer;
    @media (max-width:950px){
       width:30px;
       height:30px;
       margin:5px;
    
    }
    
    
`