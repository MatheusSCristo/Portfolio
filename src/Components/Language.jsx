import React from 'react'
import * as S from "./theme"
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../features/Slice'

const Language = () => {
  const language = useSelector((state) => state.config.language)
    const dispatch = useDispatch()

    const HandleClickLanguage = () => {
        if (language === "pt")
            dispatch(changeLanguage( "en" ))
        else if (language === "en")
            dispatch(changeLanguage("pt" ))
    }
  return (
    <S.Language $language={language} onClick={HandleClickLanguage}/>
  )
}

export default Language