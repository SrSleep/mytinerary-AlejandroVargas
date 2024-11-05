import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCity = createAsyncThunk("GET_CITY", async (idCity) => {

    const response = await axios.get(`http://localhost:8080/api/itinerary/cityItineraries/${idCity}`)
    if (response.data.itineraries && response.data.itineraries.length === 0) {
        const secondResponse = await axios.get(`http://localhost:8080/api/city/id/${idCity}`)
        return secondResponse.data.city
    } else {
        return response.data.itineraries
    }
})

