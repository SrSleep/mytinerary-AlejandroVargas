import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setUser = createAction("SET_USER", (datos) => {
    return {
        payload: datos,
    }
})
//const setUser = createAction("SET_USER") lo mismo que arriba pero podemos manipular datos arriba


const signOut = createAsyncThunk("SIGN_OUT", async ({ email, token }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/auth/signout`, email, { headers: { Authorization: `Bearer ${token}` } });
        return response.data
    } catch (error) {
        console.log(error);
        
        return rejectWithValue("Something went wrong: " + error.response.data.message);
    }
})


const login = createAsyncThunk("LOGIN", async ({ email, password }, { rejectWithValue }) => {
    try {
        const credentials = { email, password };
        const response = await axios.post(`http://localhost:8080/api/auth/signin`, credentials);
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        return rejectWithValue("Something went wrong: " + error.response.data.message);
    }
});

const signUp = createAsyncThunk("SIGN_UP", async ({ email, password, name, lastName, country, fileName }, { rejectWithValue }) => {

    try {
        const userData = { email, password, name, lastName, cityId: country, photo: fileName };

        const response = await axios.post(`http://localhost:8080/api/user/register`, userData);

        return response.data;

    } catch (error) {

        const errorMessages = Array.isArray(error.response.data.message)
            ? error.response.data.message.filter(err => err.message).map(err => err.message)
            : (error.response.data.message ? [error.response.data.message] : []);

        return rejectWithValue(errorMessages);
    }
});

export { login, setUser, signOut, signUp };