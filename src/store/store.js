import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducer/cityReducer";

 const store = configureStore({
    reducer:{
        cityStore:citiesReducer,
    }
 })

 export default store