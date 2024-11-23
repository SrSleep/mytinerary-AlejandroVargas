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
        console.log("entramos signOut");
        const response = await axios.post(`http://localhost:8080/api/auth/signout`, email, { headers: { Authorization: `Bearer ${token}` } });
        return response.data
    } catch (error) {
        console.log("Error en signOut");

        return rejectWithValue("Something went wrong: " + error.response.data.message);
    }

})


const login = createAsyncThunk("LOGIN", async ({ email, password }, { rejectWithValue }) => {
    try {
        console.log("entramos log");

        const credentials = { email, password };
        const response = await axios.post(`http://localhost:8080/api/auth/signin`, credentials);

        console.log("response :", response.data);
        localStorage.setItem("token", response.data.token);

        return response.data;
    } catch (error) {
        // Si el error es del backend, usamos el rejectWithValue para pasar el mensaje de error
        console.log("Error en login:", error.response.data.message);

        // Devolvemos el error al estado de Redux
        return rejectWithValue("Something went wrong: " + error.response.data.message);
    }
});

export { login, setUser, signOut };