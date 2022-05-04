import { createSlice } from "@reduxjs/toolkit";

const UserInitialState = {
    name:"",
    age:0,
    mail:""
}

const UserSlice = createSlice({
    name:"user",
    initialState:{value:UserInitialState},
    reducers:{
        login: (state,action) => {
            state.value = action.payload
        },
        logout: (state,action) => {
            state.value = UserInitialState
        }
    }
})

export default UserSlice.reducer
export const {login,logout} = UserSlice.actions