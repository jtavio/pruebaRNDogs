import { configureStore } from "@reduxjs/toolkit";
import  DogsSlice from '../context/dogsSlice/DogsSlice';
import LoginReducer from "../context/login/LoginReducer";
import BreedsReducer from "../context/dogsSlice/BreedsSlice";
import SaveFavoriteReducer from "../context/dogsSlice/SaveSlice";


export const store = configureStore({
    reducer:{
        dogs: DogsSlice,
        login: LoginReducer,
        breeds: BreedsReducer,
        saveFavorite: SaveFavoriteReducer
    }    
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;