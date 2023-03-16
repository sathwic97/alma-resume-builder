import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const WorkExpData = createSlice({
  name: "work",
  initialState,
  reducers: {
    workExperience(state, action) {
      return { ...state, [action.payload[0]]: action.payload[1] };
    },
  },
});

export const { workExperience } = WorkExpData.actions;
export default WorkExpData.reducer;
