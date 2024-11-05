import { createReducer } from "@reduxjs/toolkit";
import { getCity } from "../actions/itineraryActions";

const initialSteate = {
    city:[],
    loading: true
}
export const itineraryReducer = createReducer (initialSteate, (builder) =>{
    builder
    .addCase(getCity.pending, (state) => {
        state.loading = true;
      }).addCase(getCity.fulfilled, (state, action) => {
        state.loading = false;
        state.city = action.payload
      }).addCase(getCity.rejected, (state) => {
        state.loading = false
      })
})