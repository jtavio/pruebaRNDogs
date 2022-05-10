import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {favorite }  from "../../models/DogsAll";
 export interface favorite {
     dogsItems: Array<string>;
 }

const initialState:favorite = {
    dogsItems: [],
}

const SaveFavoriteReducer = createSlice({
    name:'breeds',
    initialState,
    reducers:{
        saveFavorite: (state, action) => {
            // const tempDogs = {...action.payload}
            // console.log('tempDogs, ', tempDogs);
            state.dogsItems.push(...action.payload);
           
        },
        
    }
})

export const {saveFavorite} = SaveFavoriteReducer.actions;
export default SaveFavoriteReducer.reducer;