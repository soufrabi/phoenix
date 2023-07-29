import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = (key) => {
  const retrieved = JSON.parse(localStorage.getItem(key));
  if (retrieved != null) {
    const data = JSON.parse(localStorage.getItem(key));
    console.log(data);
    return data
  } else {
    const data = {size:0,list:[]}
    return data
  }

}


const saveInLocalStorage = (key, data) => {

  localStorage.setItem(key, JSON.stringify(data));


}



const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: loadFromLocalStorage("playlists"),
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
