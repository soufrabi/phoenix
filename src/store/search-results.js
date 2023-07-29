import { createSlice } from "@reduxjs/toolkit";


const searchResultsSlice = createSlice({
  name: 'searchResults',
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


export const searchResultsActions = searchResultsSlice.actions

export default searchResultsSlice
