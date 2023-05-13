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
        },
        addMoreExperience:(state,action)=>{
           
        }
        

    }
});
export const {workExperienceEntry,addMoreExperience} = workExperienceSlice.actions;
export default workExperienceSlice.reducer;