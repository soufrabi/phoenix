
import { createSlice } from "@reduxjs/toolkit";


const historySlice = createSlice({
  name: 'history',
  initialState : {
    size: 0,
    list: [] // stores list of playlists
  },
  reducers: {
    addToList(state,action){
      const newItem = action.payload

      const type = newItem.type
      const id = newItem.id

      if(newPlaylist.length > 2){
        state.size ++ 

        list.push({
          type:type,
          id: id
        })
      }
    }
  }

})


export const historyActions = historySlice.actions

export default historySlice
