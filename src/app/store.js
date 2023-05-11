import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        personalInformation: personalInformationReducer,
        educationInformation: educationInformationReducer,
        workExperience: workExperienceReducer,

    }


})