import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workExperience:[],
    status:'idle',
}

export const workExperienceSlice = createSlice({
    name:'workExperience',
    initialState,
    reducers:{
        workExperienceEntry:(state, action)=>{
            state.workExperience = action.payload
        }

    }
});
export const {workExperienceEntry} = workExperienceSlice.actions;
export default workExperienceSlice.reducer;