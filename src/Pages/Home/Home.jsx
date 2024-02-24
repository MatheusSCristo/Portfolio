import React from 'react'
import * as S from './styles'
import { useSelector } from "react-redux"
import Theme from '../../global/styles/theme'


const home = () => {
  const theme = useSelector((state) => state.config.theme)
  const language = useSelector((state) => state.config.language)
  
  return (
    <S.Page theme={theme} id="Home">
      <S.Mobile>
        {language === "en" &&
          <>
        <S.Title theme={theme}>Meet your Next</S.Title>
        <S.Title color={Theme.darkTheme.blue}>Front End Engineer</S.Title>
        <S.Text theme={theme}>My name is Matheus Cristo, i'm 19 years old,
          software engineer specialized in front-end development.</S.Text>
          </>
          }
          {language === "pt" &&
          <>
          <S.Title theme={theme}>Conheça seu próximo</S.Title>
          <S.Title color={Theme.darkTheme.blue}>Engenheiro Front End</S.Title>
          <S.Text theme={theme}>Meu nome é Matheus Cristo, tenho 19 anos,
            engenheiro de software especializado em desenvolvimento front-end.</S.Text>
            </>
          }
        <S.Container>
          <S.LinkWrapper as="a" href='https://github.com/MatheusSCristo' target='_blank'>
            <S.Image src='/imgs/Github.svg' width={"25px"} />
            <S.LinkText theme={theme}>Github</S.LinkText>
          </S.LinkWrapper>
          <S.LinkWrapper as="a" href='https://www.linkedin.com/in/matheuscristodev/' target='_blank' >
            <S.Image src='/imgs/Linkedin.svg' width={"30px"} />
            <S.LinkText theme={theme}>Linkedin</S.LinkText>
          </S.LinkWrapper>
        </S.Container>
      </S.Mobile>
    </S.Page>
  )
}

export default home