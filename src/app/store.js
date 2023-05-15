import { configureStore } from "@reduxjs/toolkit";
import personalInformationReducer from '../features/personalInformation/personalInformationSlice';
import educationInformationReducer from '../features/educationInformation/educationInformationSlice';
import workExperienceReducer from '../features/workExperience/workExperienceSlice';
import tabIndexReducer from '../features/util_features/tabIndexSlice';
import resumeOptionsReducer from '../features/resumeTemplates/resumeOptionsSlice';

export const store = configureStore({
    reducer:{
        personalInformation: personalInformationReducer,
        workExperience: workExperienceReducer,
        educationInformation: educationInformationReducer,
        resumeOptions : resumeOptionsReducer,
        tabIndex: tabIndexReducer,

    }


})