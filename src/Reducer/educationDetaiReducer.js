import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const educationData = createSlice({
  name: "work",
  initialState,
  reducers: {
    educationDetail(state, action) {
      return { ...state, [action.payload[0]]: action.payload[1] };
    },
  },
});

export const { educationDetail } = educationData.actions;
export default educationData.reducer;