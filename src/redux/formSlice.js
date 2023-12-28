import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name:"values",
    initialState:{},
    reducers:{
        create:(state, action)=>{
            state.type = action.payload.type
            state.description = action.payload.description
            state.amount = action.payload.amount
            state.date = action.payload.date
        }
    }
})

export const {create} = formSlice.actions
export default formSlice.reducer