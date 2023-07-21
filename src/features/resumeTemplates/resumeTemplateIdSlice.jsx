import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resumeTemplateId : ' ',
};

const resumeTemplateIdSlice = createSlice({
    name:'resumeTemplateId',
    initialState,
    reducers:{
        updateResumeTemplateId:(state,action)=>{
            state.resumeTemplateId = action.payload
        }
    }
});

export const {updateResumeTemplateId} = resumeTemplateIdSlice.actions;
export default resumeTemplateIdSlice.reducer;