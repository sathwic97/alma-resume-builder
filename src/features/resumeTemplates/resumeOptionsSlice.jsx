import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resumeTemplateId:'',
    nameColor:'black',
    roleColor:'black',
    extraInformationColor:'black',
    objectiveColor:'black',
    subTitleColor:'black',
    pointsColor:'black',
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderWidth:'2',
    sectionHeadingColor:'black',
}

const resumeOptionsSlice = createSlice({
    name:'resumeOptions',
    initialState,
    reducers:{
        updateNameColor : (state,action)=>{
            state.nameColor = action.payload;
        },
        updateRoleColor : (state,action)=>{
            state.roleColor = action.payload;
        },

        updateBackgroundColor : (state,action)=>{
            state.backgroundColor = action.payload;
        },

        updateBorderColor : (state,action)=>{
            state.borderColor = action.payload;
        },

        updateResumeTemplateId : (state,action)=>{
            state.resumeTemplateId = action.payload;
        },

        updateSectionHeadingColor : (state,action)=>{
            state.sectionHeadingColor = action.payload;
        },
        updateExtraInformationColor : (state,action)=>{
            state.extraInformationColor = action.payload;
        },
        updateSubTitleColor : (state,action)=>{
            state.subTitleColor = action.payload;
        },
        updatePointsColor : (state,action)=>{
            state.pointsColor = action.payload;
        },
        updateObjectiveColor:(state,action)=>{
            state.objectiveColor = action.payload;
        },
        updateBorderWidth: (state,action)=>{
            state.borderWidth = action.payload;
        }

        

    }
});
export const {updateResumeTemplateId,updateBackgroundColor,updateBorderColor,updateNameColor,updateRoleColor,updateSectionHeadingColor,updateExtraInformationColor,updatePointsColor,updateSubTitleColor,updateObjectiveColor,updateBorderWidth} = resumeOptionsSlice.actions;
export default resumeOptionsSlice.reducer;