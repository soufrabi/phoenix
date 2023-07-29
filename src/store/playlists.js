import { createSlice } from "@reduxjs/toolkit";

import {saveInLocalStorage, loadFromLocalStorage} from "./local_storage"


const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: loadFromLocalStorage("playlists",{
    size:0,
    list:[]
  }
  ),
  reducers: {

    deleteAllPlaylists(state, action) {

      state.size = 0
      state.list = []

      saveInLocalStorage("playlists", state)
    },

    addPlaylist(state, action) {
      const newPlaylist = action.payload
      const playlistId = newPlaylist.id
      const playlistName = newPlaylist.name
      const playlistType = newPlaylist.type

      if (true) {
        state.size++

        state.list.push({
          name: playlistName,
          type: playlistType,
          id: playlistId
        })
      }

      saveInLocalStorage("playlists", state)
    },

    removePlaylist(state, action) {

    },
  }

})


export const playlistsActions = playlistsSlice.actions

export default playlistsSlice
