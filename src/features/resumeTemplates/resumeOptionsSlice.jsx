import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resumeTemplateId:'',
    nameColor:'blue',
    roleColor:'violet',
    extraInformationColor:'red',
    objectiveColor:'yellow',
    subTitleColor:'black',
    pointsColor:'black',
    backgroundColor:'blue',
    borderColor:'blue',
    borderWidth:'15',
    sectionHeadingColor:'black',
    sectionHeadingStyle:'column',
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
        },
        updateSectionHeadingStyle:(state,action)=>{
            state.sectionHeadingStyle = action.payload;
        }

        

    }
});
export const {updateBackgroundColor,updateBorderColor,updateNameColor,updateRoleColor,updateSectionHeadingColor,updateExtraInformationColor,updatePointsColor,updateSubTitleColor,updateObjectiveColor,updateBorderWidth,updateResumeTemplateId,updateSectionHeadingStyle} = resumeOptionsSlice.actions;
export default resumeOptionsSlice.reducer;