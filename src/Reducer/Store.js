import { configureStore } from "@reduxjs/toolkit";

import profileData from "./personalInfoReducer";
import WorkExpData from "./workExperienceReducer";
import educationData from "./educationDetaiReducer";
import skillData from "./keySkillReducer";
export const store = configureStore({
  reducer: {
    personal: profileData,
    workExperience: WorkExpData,
    educationDetail: educationData,
    keySkill: skillData,
  },
});
