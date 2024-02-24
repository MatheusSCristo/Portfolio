import React from 'react'
import * as S from "./styles"
import { useSelector } from 'react-redux'

const About = () => {
    const theme=useSelector((state)=>state.config.theme)
    const language=useSelector((state)=>state.config.language)
    return (
        <S.About theme={theme} id="About">
            <S.Container>
                <S.ImageWrapper/>                
                <S.Container direction="column" width="100%" $align="center">

                {language === "en" &&
                <>
                <S.Title>About me</S.Title>
                <S.Text theme={theme}>I'm currently studying Information Technology in the Federal University of Rio Grande do Norte.</S.Text>
                <S.Text theme={theme}>I have always liked computer related things, so when i became 18 years old i figured i wanted to be a software engineer.</S.Text>
                <S.Text theme={theme}>Started my software engineer  journey in 2023, pursuing a career in web development.</S.Text>
                <S.Text theme={theme}>In summary, my choice of front-end development is driven by  the opportunity to impact users directly and the chance to collaborate with diverse teams.</S.Text>
                </>
                }

                {language === "pt" && 
                <>
                <S.Title>Sobre mim</S.Title>
                <S.Text theme={theme}>Atualmente estou cursando Tecnologia da Informação na Universidade Federal do Rio Grande do Norte.</S.Text>
                <S.Text theme={theme}>Sempre gostei de coisas relacionadas a informática, então quando fiz 18 anos decidi que queria ser engenheiro de software.</S.Text>
                <S.Text theme={theme}>Comecei minha jornada como engenheiro de software em 2023, seguindo carreira em desenvolvimento web.</S.Text>
                <S.Text theme={theme}>Em resumo, minha escolha pelo desenvolvimento front-end é motivada pela oportunidade de impactar diretamente os usuários e pela oportunidade de colaborar com diversas equipes.</S.Text>
                </>}

                <S.Title>Hard Skills</S.Title>
                <S.Text theme={theme}>JavaScript, HTML, CSS, React, NextJS, Typescript, Tailwind </S.Text>
                <S.Text theme={theme}>StyledComponents, GIT, GitHub, MySQL, Prisma</S.Text>
                </S.Container>
            </S.Container>
        </S.About>
    )
}

export default About