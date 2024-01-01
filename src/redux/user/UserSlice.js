import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:{}
}
const userSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
        setUser: (state,{payload})=>{
            state.user = payload
        }

    }
})
const {reducer, actions} = userSlice

export const {setUser} = actions

export default reducer