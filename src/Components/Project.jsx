import React, { useState } from 'react'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiSolidFileCss } from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb";

const Project = ({ project }) => {
  const theme = useSelector((state) => state.config.theme)
  const language = useSelector((state) => state.config.language)
  const [activeDetail, setActiveDetail] = useState(false)

  const handleDetailClick = () => {
    setActiveDetail(!activeDetail)
  }

  return (

    <S.Wrapper theme={theme} key={project.title.pt}>
      {activeDetail &&
        <S.Info>
          {language === "en" && <>
            <S.Title>{project.title.en}</S.Title>
            <S.infos>{project.description.en}</S.infos>
          </>
          }
          {language === "pt" && <>
            <S.Title>{project.title.pt}</S.Title>
            <S.infos>{project.description.pt}</S.infos>
          </>
          }
          <S.Container>
            {project.languages.map((language, i) => {
              switch (language) {
                case "JS": return <BiLogoJavascript size={30} key={i} />
                case "React": return <BiLogoReact size={30} key={i} />
                case "CSS": return <BiSolidFileCss size={30} key={i} />
                case "Tailwind": return <BiLogoTailwindCss size={30} key={i} />
                case "Next": return <TbBrandNextjs size={30} key={i} />
              }
            }
            )}
          </S.Container>
          <S.LinkWrapper onClick={handleDetailClick} $bottom="0">
            {language === "en" &&
              <S.LinkText>Got it!</S.LinkText>
            }
            {language === "pt" &&
              <S.LinkText>Entendi!</S.LinkText>
            }
          </S.LinkWrapper>
        </S.Info>
      }
      {language === "en" &&
        <S.Title >{project.title.en}</S.Title>
      }
      {language === "pt" &&
        <S.Title >{project.title.pt}</S.Title>
      }
      <S.Image $image={project.img} />
      <S.Container content="center">
        <S.LinkWrapper as="a" href={project.deploy} target='_blank'>
          <S.LinkText theme={theme} >Deploy</S.LinkText>
        </S.LinkWrapper>
        <S.LinkWrapper as="a" href={project.git} target='_blank'>
          {language === "en" &&
            <S.LinkText theme={theme} >Repository</S.LinkText>
          }
          {language === "pt" &&
            <S.LinkText theme={theme} >Repositório</S.LinkText>
          }
        </S.LinkWrapper>
      </S.Container>
      <S.LinkWrapper onClick={handleDetailClick}>
        {language === "en" &&
          <S.LinkText theme={theme}>Details</S.LinkText>
        }
        {language === "pt" &&
          <S.LinkText theme={theme}>Detalhes</S.LinkText>
        }
      </S.LinkWrapper>

    </S.Wrapper>

  )
}

export default Project