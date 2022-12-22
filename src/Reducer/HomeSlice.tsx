import { createSlice } from "@reduxjs/toolkit";
import { setDataOnStore } from "../ActionCreators/HomeActionCreators";

const HomeSlice = createSlice({
    name:"homeSlice",
    initialState:{
        data:{},
        value:''
    },
    reducers:{
    //     setDataToStore:(state,action)=>{
    //        console.log(action.payload)
    //    return {
    //     ...state,value:action.payload
    //    }
    //     }
    },
    extraReducers:(builder) =>{
        builder.addCase(setDataOnStore.fulfilled,(state,action)=>{
            console.log(action.payload)
               return {
                ...state,value:action.payload
               }
        })
    },
})
// export const  {setDataToStore} = HomeSlice.actions
export default HomeSlice.reducer 