import React, { useState } from 'react'
import Theme from '../global/styles/theme'
import ThemeButton from './ThemeButton'
import { BiMenu } from "react-icons/bi"
import Language from './Language'
import * as S from "./menustyle"
import { useSelector } from 'react-redux'

const Menu = () => {
    const [active, setActive] = useState(false)
    const theme = useSelector((state) => state.config.theme)
    const language = useSelector((state) => state.config.language)
    return (
        <>
            {!active && <BiMenu onClick={() => setActive(true)} size={30} color={theme === "dark" ? Theme.darkTheme.white : Theme.lightTheme.black} />}
            {active &&
                <S.Box theme={theme}>
                    {theme === "light" &&
                        <S.Image src='/imgs/Close.svg' onClick={() => setActive(false)} />
                    }
                    {theme === "dark" &&
                        <span style={{color:"white",fontFamily:'sans-serif',float:"right"}} onClick={() => setActive(false)}>X</span>
                    }
                    {language === "en" && <S.Container>
                        <S.text theme={theme}>Theme</S.text>
                        <ThemeButton />
                        <S.text theme={theme}>Language</S.text>
                        <Language />
                    </S.Container>}
                    {language === "pt" && <S.Container>
                        <S.text theme={theme}>Tema</S.text>
                        <ThemeButton />
                        <S.text theme={theme}>Linguagem</S.text>
                        <Language />
                    </S.Container>}

                </S.Box>
            }
        </>

    )
}

export default Menu