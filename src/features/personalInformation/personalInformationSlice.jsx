import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalInformation: [],
    status:"idle",
}

export const personalInformationSlice = createSlice({
    name:'personalInformation',
    initialState,
    reducers:{
        personalInformationEntry: (state, action)=>{
            state.personalInformation = action.payload
        }
    }


});
export const {personalInformationEntry} = personalInformationSlice.actions;
export default personalInformationSlice.reducer;