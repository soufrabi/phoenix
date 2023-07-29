import { createSlice } from "@reduxjs/toolkit";


const playlistsSlice = createSlice({
  name: 'playlists',
  initialState : {
    size: 0,
    list: [] // stores list of playlists
  },
  reducers: {
    addPlaylist(state,action){
      const newPlaylist = action.payload
      const playlistId = newPlaylist.id
      const playlistName = newPlaylist.name
      const playlistType = newPlaylist.type

      if(newPlaylist.length > 2){
        state.size ++ 

        list.push({
          name:playlistName,
          type:playlistType,
          id:playlistId
        })
      }

    }
  }

})


export const playlistsActions = playlistsSlice.actions

export default playlistsSlice
