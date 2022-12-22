import React from 'react'

type Props = {
    data:any,
    value:string
}


const initialData:Props = {
    value:'',
    data:null
}
const HomeReducer = (state=initialData,action)=>{
switch (action.type)
{
  
    case "SET_STORE_DATA_PENDING":
        console.log(action.type)
       break;
   case "SET_STORE_DATA_SUCCESS":
    console.log(state.data)
    return{...state,data:action.payload}
    case "SET_STORE_DATA_FAILURE":
        console.log(action.type)
       break;
  
break
default:
    return state
}
 
}

export default HomeReducer