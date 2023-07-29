import { createSlice } from "@reduxjs/toolkit";


const searchResultsExploreSlice = createSlice({
  name: 'searchResultsExplore',
  initialState : {
    searchResults : []
  },
  reducers: {
    updateSearchResults(state,action){
      const searchResults = action.payload

      if(searchResults.length > 0){
        state.searchResults= searchResults
      }

    }
  }

})


export const searchResultsExploreActions = searchResultsExploreSlice.actions

export default searchResultsExploreSlice
