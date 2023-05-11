import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    educationInformation: [],
    status:'idle',
}

export const educationInformationSlice = createSlice({
    name:'educationInformation',
    initialState,
    reducers:{

    }
})