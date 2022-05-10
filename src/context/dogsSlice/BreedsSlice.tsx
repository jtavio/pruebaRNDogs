import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {BreedsImage, favorite}  from "../../models/DogsAll";

const initialState:BreedsImage = {
    message: [],
    status:  ''
}

const BreedsReducer = createSlice({
    name:'breeds',
    initialState,
    reducers:{
        getImages: (state, action:PayloadAction<BreedsImage>) => {
            state.message = action.payload.message,
            state.status = action.payload.status
        },
        
    }
})

export const {getImages} = BreedsReducer.actions;
export default BreedsReducer.reducer;