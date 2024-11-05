import { createReducer } from "@reduxjs/toolkit";
import { setSearch, getCities } from "../actions/cityActions";

const initialSteate = {
    cities:[],
    search: "",
    loading: true,
}

export const citiesReducer = createReducer (initialSteate, (builder) =>{
    builder
    .addCase(setSearch,(state, action)=>{
        state.search = action.payload
    })
    
    .addCase(getCities.pending, (state) => {
        state.loading = true;
      }).addCase(getCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload
      }).addCase(getCities.rejected, (state) => {
        state.loading = false
      })
})