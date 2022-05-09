import { createSlice } from "@reduxjs/toolkit"

const InitialState = false
const AuthSlice = createSlice({
    name:"auth",
    initialState:{value:InitialState},
    reducers:{
        authToggle:(state,action) => {
            state.value = state.value?false:true
        }
    }
})

export default AuthSlice.reducer

export const {authToggle} = AuthSlice.actions