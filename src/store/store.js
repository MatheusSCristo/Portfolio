import { configureStore } from "@reduxjs/toolkit";
import configReducer  from "../features/Slice"

const store= configureStore({
    reducer:{
        config:configReducer,
    }
})
export default store;