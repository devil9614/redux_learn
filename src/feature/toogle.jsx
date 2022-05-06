import { createSlice } from "@reduxjs/toolkit";

const InitialState = 0

const ToggleSlice = createSlice({
    name:"toggle",
    initialState:{value:InitialState},
    reducers:{
        toggleTheme : (state,action) => {
            state.value = state.value === 1?0:1;
            // if(state.value){
            //     state.value = 0;
            // }else{
            //     state.value = 1;
            // }
        }
    }
})

export default ToggleSlice.reducer
export const {toggleTheme} = ToggleSlice.actions