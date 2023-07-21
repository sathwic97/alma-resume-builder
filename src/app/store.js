import { configureStore } from "@reduxjs/toolkit";
import personalInformationReducer from '../features/personalInformation/personalInformationSlice';
import educationInformationReducer from '../features/educationInformation/educationInformationSlice';
import workExperienceReducer from '../features/workExperience/workExperienceSlice';
import tabIndexReducer from '../features/util_features/tabIndexSlice';
import resumeOptionsReducer from '../features/resumeTemplates/resumeOptionsSlice';
import resumeTemplateIdReducer from "../features/resumeTemplates/resumeTemplateIdSlice";
export const store = configureStore({
    reducer:{
        resumeTemplateId: resumeTemplateIdReducer,
        tabIndex: tabIndexReducer,
        personalInformation: personalInformationReducer,
        workExperience: workExperienceReducer,
        educationInformation: educationInformationReducer,
        resumeOptions : resumeOptionsReducer,
        
        

    }


})