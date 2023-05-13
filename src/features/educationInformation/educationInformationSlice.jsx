import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    educationInformation: [],
    status:'idle',
}

export const educationInformationSlice = createSlice({
    name:'educationInformation',
    initialState,
    reducers:{
        educationInformationEntry:(state,action)=>{
            state.educationInformation = action.payload
        }

    }
});
export const {educationInformationEntry} = educationInformationSlice.actions;
export default educationInformationSlice.reducer;