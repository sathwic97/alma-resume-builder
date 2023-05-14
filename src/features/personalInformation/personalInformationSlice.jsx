import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalInformation: [],
    status:"default",
}

export const personalInformationSlice = createSlice({
    name:'personalInformation',
    initialState,
    reducers:{
        personalInformationEntry: (state, action)=>{
            state.personalInformation = action.payload;
            state.status = 'filled';
        }
    }


});
export const {personalInformationEntry} = personalInformationSlice.actions;
export default personalInformationSlice.reducer;