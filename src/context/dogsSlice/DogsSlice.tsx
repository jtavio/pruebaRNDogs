import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {PlacesRes}  from "../../models/DogsAll";

// interface CounterState {
//     value: number;
// }

const initialState: PlacesRes = {
    message: [],
    status: ''
}



// const initialState: CounterState = {
//     value: 1
// }

 const DogsSlice = createSlice({
     name: "counter",
     initialState,
        reducers: {
            setDogs: (state, action: PayloadAction<PlacesRes>) => {
                state.message = action.payload.message,
                state.status = action.payload.status
                
            }
//         increment: (state) => {
//             if(state.value > 897){
//                 state.value = 898;
//                 return;
//             }
//             state.value++;
//         },
//         decrement: (state) => {
//             if(state.value < 2) {
//                 return state;
//             }
//             state.value--;
//         },
//         incrementByAmount: (state, action: PayloadAction<number>) => {
//             if(state.value + action.payload > 897) {
//                 state.value = 898;
//             }else {
//                 state.value += action.payload;
//             }
//         },
//         decrementByAmount: (state, action: PayloadAction<number>) => {
//             if(state.value - action.payload < 2) {
//                 state.value = 1;
//                 return;
//             }
//             state.value -= action.payload;
//         },
//         reset: (state) => {
//             state.value =  1;
//         }

     }
 });

// export const {increment, incrementByAmount, decrement, decrementByAmount, reset} = DogsSlice.actions;
// export default DogsSlice.reducer;


 export const {setDogs} = DogsSlice.actions;
 export default DogsSlice.reducer;