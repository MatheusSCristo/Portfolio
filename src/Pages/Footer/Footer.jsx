import React from 'react'
import { useSelector } from 'react-redux'
import * as S from "./style"

const Footer = () => {

  const language=useSelector((state)=>state.config.language)
  return (
    <S.Footer id="Contact">
      {language === "en" &&
        <>
          <S.Title>Want to get to know me and my work better?</S.Title>
          <S.Title>Contact me!</S.Title>
        </>
      }
      {language === "pt" &&
        <>
          <S.Title>Quer conhecer melhor a mim e ao meu trabalho?</S.Title>
          <S.Title>Fale comigo!</S.Title>
        </>
      }
      <S.Container>
        <S.Text>cristo.matheus@outlook.com</S.Text>
        <S.Text>+55 (84) 99187-8729</S.Text>
      </S.Container>
      <S.Text>Natal-RN</S.Text>


    </S.Footer>

  )
}

export default Footer