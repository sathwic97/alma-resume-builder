import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const profileData = createSlice({
  name: "profile",
  initialState,
  reducers: {
    personalInfo(state, action) {
      return { ...state, [action.payload[0]]: action.payload[1] };
    },
  },
});

export const { personalInfo } = profileData.actions;
export default profileData.reducer;