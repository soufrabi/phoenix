import { createSlice } from "@reduxjs/toolkit";


const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState : {
    searchResults : [],
    playlistResult: {
        videos: []
    },
  },
  reducers: {
    updateSearchResults(state,action){
      const searchResults = action.payload

      if(searchResults.length > 0){
        state.searchResults= searchResults
      }
    },
    updatePlaylist(state,action){
        const playlistInfo = action.payload
        state.playlistResult = playlistInfo
    },
  }

})


export const searchResultsActions = searchResultsSlice.actions

export default searchResultsSlice
