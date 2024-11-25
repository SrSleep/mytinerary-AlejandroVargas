import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducer/cityReducer";
import { itineraryReducer } from "./reducer/itineraryReducer";
import { authReducer } from "./reducer/authReducer";

 const store = configureStore({
    reducer:{
        cityStore:citiesReducer,
        itineraryStore:itineraryReducer,
        authStore: authReducer
    }
 })

 export default store