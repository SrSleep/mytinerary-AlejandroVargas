import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducer/cityReducer";
import { itineraryReducer } from "./reducer/itineraryReducer";

 const store = configureStore({
    reducer:{
        cityStore:citiesReducer,
        itineraryStore:itineraryReducer,
    }
 })

 export default store