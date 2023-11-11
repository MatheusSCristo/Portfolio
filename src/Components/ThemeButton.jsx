import React from 'react'
import {BsSunFill,BsMoonStarsFill} from "react-icons/bs"
import * as S from "./theme"
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../features/Slice'

const ThemeButton = () => {
    const theme = useSelector((state) => state.config.theme)
    const dispatch = useDispatch()

    const HandleClickLight = () => {
        if (theme === "dark")
            dispatch(changeTheme( "light" ))
        else if (theme === "light")
            dispatch(changeTheme("dark" ))
    }
  return (
    <S.Container onClick={HandleClickLight} theme={theme}>
        <S.Circle theme={theme}/>
        {theme==="light"?<BsSunFill/>:<BsMoonStarsFill/>}
    </S.Container>
   )
}

export default ThemeButton