import { createSlice } from "@reduxjs/toolkit";
import Global from '../global/styles/theme'

const initialState={
   theme:"light",
   language:"en"
}
 const configSlice=createSlice({
    name:"config",
    initialState,
    reducers:{
        changeTheme: (state, action) => {
          return { ...state, theme: action.payload };
        },
        changeLanguage: (state, action) => {
          return { ...state, language: action.payload };
        },
      },
 })

 export const {changeTheme,changeLanguage} = configSlice.actions
 export default configSlice.reducer