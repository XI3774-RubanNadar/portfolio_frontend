import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'
// export const setDataOnStore= ()=>{
 
//   return dispatch => {
  
//    axios.get("https://jsonplaceholder.typicode.com/users").then(({data})=>{
//     if(data!=null)
//     {
//         console.log(data)
// dispatch({type:"SET_STORE_DATA_SUCCESS",payload:data})
//     }
//    }).catch(e=>console.log(e))
//   }
// }

export const setDataOnStore = createAsyncThunk(
  'SET_USER_DATA',
  async (thunkAPI) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log("my data",response)
    return response.data
  }
)