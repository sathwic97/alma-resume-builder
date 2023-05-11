import { configureStore } from "@reduxjs/toolkit";
import personalInformationReducer from '../features/personalInformation/personalInformationSlice';
import educationInformationReducer from '../features/educationInformation/educationInformationSlice';
import workExperienceReducer from '../features/workExperience/workExperienceSlice';

export const store = configureStore({
    reducer:{
        personalInformation: personalInformationReducer,
        educationInformation: educationInformationReducer,
        workExperience: workExperienceReducer,

    }


})