import React from 'react'
import * as S from "./styles"
import Project from '../../Components/Project'
import { useSelector } from 'react-redux'

const Projects = () => {
  const theme = useSelector((state) => state.config.theme)
  const language=useSelector((state)=>state.config.language)
  return (
    <S.Projects theme={theme} id="Projects">
      {language === "en" &&
      <S.Title >My Projects</S.Title>}
      {language === "pt" &&
      <S.Title >Meus Projetos</S.Title>}
      <S.Container>
        <Project />
      </S.Container>
    </S.Projects>
  )
}

export default Projects