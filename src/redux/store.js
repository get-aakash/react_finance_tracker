import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/UserSlice"
import  transReducer from "./transaction/transactionSlice"
 const store =  configureStore({
    reducer:{
        user:userReducer,
        transaction: transReducer,
        
    }
})

export default store