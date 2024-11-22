import { createReducer } from "@reduxjs/toolkit";
import { login } from "../actions/authActions";

const initialState = {
    loading : false,
    error: false,
    user: null,
    token: null
}

export const authReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(login.fulfilled,(state, action) => {
        console.log("se ejecuto fullfilled");
        
        state.loading = false,
        state.error = false,
        state.user = action.payload.user,
        state.token = action.payload.token
    })
    .addCase(login.pending,(state, action) => {
        console.log("se ejecuto pendiente");
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null
    })
    .addCase(login.rejected,(state, action) => {
        console.log("se ejecuto rejected");
        state.loading = false,
        state.error = true,
        state.user = null,
        state.token = null
    })
})