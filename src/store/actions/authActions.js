import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk("LOGIN", async ({email, password}) => {
    console.log("entramos log");
    
    const credentials = {
        email: email, 
        password: password
    }
    const response = await axios.post(`http://localhost:8080/api/auth/signin`,credentials)
    console.log("se proceso log");
    console.log("response :", response.data);
    localStorage.setItem("token", response.data.token)
    
    return response.data
})

export {login}