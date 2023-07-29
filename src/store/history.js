
import { createSlice } from "@reduxjs/toolkit";
import {saveInLocalStorage, loadFromLocalStorage} from "./local_storage"

const historySlice = createSlice({
  name: 'history',
  initialState : loadFromLocalStorage("history",{
    size:0,
    list: []
  }
  ),
  reducers: {
    add(state,action){
      const newItem = action.payload

      const type = newItem.type
      const id = newItem.id

      if(true){
        state.size ++ 

        state.list.push({
          type:type,
          id: id
        })
      }

      saveInLocalStorage("history",state)
    }
      
  }

})


export const historyActions = historySlice.actions

export default historySlice
