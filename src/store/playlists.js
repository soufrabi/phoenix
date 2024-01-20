import { createSlice } from "@reduxjs/toolkit";

import {saveInLocalStorage, loadFromLocalStorage} from "./local_storage"


const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: loadFromLocalStorage("playlists",{
    size:1,
    list:[
        {title:"Introduction to Qt/QML - all videos so far",type:"",author:"KDAB",id:"PL6CJYn40gN6hdNC1IGQZfVI707dh9DPRc",comments:""},
    ]
  }
  ),
  reducers: {

    deleteAllPlaylists(state) {

      state.size = 0
      state.list = []

      saveInLocalStorage("playlists", state)
    },

    addPlaylist(state, action) {
      const newPlaylist = action.payload

      if (true) {
        state.size++

        state.list.push({
          title: newPlaylist.title,
          type: newPlaylist.type,
          id: newPlaylist.id,
          author: newPlaylist.author,
          comments: newPlaylist.comments
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
