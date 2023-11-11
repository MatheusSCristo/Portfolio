import React, { useEffect, useState } from 'react'
import * as S from "./styles"
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../features/Slice'
import Theme from '../global/styles/theme'
import ThemeButton from "./themeButton"
import Language from './Language'
import Menu from './Menu'

const NavBar = () => {
    const [width,setWidth]=useState(window.screen.width)
    const theme = useSelector((state) => state.config.theme)
    const language=useSelector((state)=>state.config.language)

    useEffect(()=>{
        window.addEventListener("resize",()=>
            setWidth(window.innerWidth))
        window.removeEventListener("resize",()=>
        setWidth(window.innerWidth))
        }
        ,[])
    return (
        <S.Bar theme={theme}>
            <S.TitleBlue>{"< Matheus />"}</S.TitleBlue>
           {language === "en" &&
           <S.Container content='space-between'>
                <S.text theme={theme} as="a" href='#Home' size="2em">Home</S.text>
                <S.text theme={theme} as="a" href='#About' size="2em">About</S.text>
                <S.text theme={theme} as="a" href='#Projects' size="2em">Projects</S.text>
                <S.text theme={theme} as="a" href='#Contact' size="2em">Contact</S.text>
            </S.Container>}
           {language === "pt" &&
           <S.Container content='space-between'>
                <S.text theme={theme} as="a" href='#Home' size="2em">Inicio</S.text>
                <S.text theme={theme} as="a" href='#About' size="2em">Sobre</S.text>
                <S.text theme={theme} as="a" href='#Projects' size="2em">Projetos</S.text>
                <S.text theme={theme} as="a" href='#Contact' size="2em">Contato</S.text>
            </S.Container>}
            {width>950 &&
            <S.Container $align="center" content='space-between' $querydirection={"column"}>
                <ThemeButton />
                <Language />
            </S.Container>
            }
            {width <=950 &&
                <Menu/>
            }
        </S.Bar>
    )
}

export default NavBar