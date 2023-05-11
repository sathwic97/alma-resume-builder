import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workExperience:[],
    status:'idle',
}

export const workExperienceSlice = createSlice({
    name:'workExperience',
    initialState,
    reducers:{

    }
});
export default workExperienceSlice.reducer;