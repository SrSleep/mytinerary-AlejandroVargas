import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const  setSearch = createAction("SET_SEARCH");

export const getCities = createAsyncThunk("GET_CITIES", async(text)=> {
    
    if (text) {
        const response = await axios.get(`http://localhost:8080/api/city/all?name=${text}`)     
        return response.data.cities
        
    }else{        
        const response = await axios.get(`http://localhost:8080/api/city/all`)
        return response.data.cities
    }
})

