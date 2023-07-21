import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workExperience:[{

        
    }
       
    ],
    status:'default',
}

export const workExperienceSlice = createSlice({
    name:'workExperience',
    initialState,
    reducers:{
        workExperienceEntry:(state, action)=>{
            state.workExperience = action.payload;
            state.status = 'filled';
        },
        addMoreExperience:(state,action)=>{
            state.workExperience.push(action.payload)
           
        }
        

    }
});
export const {workExperienceEntry,addMoreExperience} = workExperienceSlice.actions;
export default workExperienceSlice.reducer;