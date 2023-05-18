import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    index: 3,
};

export const tabIndexSlice = createSlice({
    name: "tabIndex",
    initialState,
    reducers:{
        next: (state) =>{
            if(state.index < 4)
            state.index++

        },
        back: (state) =>{
            if(state.index > 0)
            state.index--
        }
    }


});
export const {next,back} = tabIndexSlice.actions;
export default tabIndexSlice.reducer;