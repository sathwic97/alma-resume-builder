import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const skillData= createSlice({
  name: "skill",
  initialState,
  reducers: {
    keySkill(state, action) {
      return  [...state,action.payload] ;
    },
  },
});

export const { keySkill } = skillData.actions;
export default skillData.reducer;