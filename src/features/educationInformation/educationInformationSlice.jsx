import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    educationInformation: [],
    status:'default',
}

export const educationInformationSlice = createSlice({
    name:'educationInformation',
    initialState,
    reducers:{
        educationInformationEntry:(state,action)=>{
            state.educationInformation = action.payload;
            state.status = 'filled';
        }

    }
});
export const {educationInformationEntry} = educationInformationSlice.actions;
export default educationInformationSlice.reducer;