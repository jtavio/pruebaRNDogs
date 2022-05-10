import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { login } from "../../models/Login";

const initialState: login = {
    email: "",
    username: "",
    isLogged: false
}


const LoginReducer = createSlice({
    name: 'Login',
    initialState,
    reducers:{
        loginuser: (state, action: PayloadAction<login>) => {
            state.email = action.payload.email,
            state.username = action.payload.username,
            state.isLogged = action.payload.isLogged
        }
    }
})

export const {loginuser} = LoginReducer.actions;
export default LoginReducer.reducer;