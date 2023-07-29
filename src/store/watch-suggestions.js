import { createSlice } from "@reduxjs/toolkit";


const watchSuggestionsSlice = createSlice({
  name: 'watchSuggestions',
  initialState : {
    videoList : []
  },
  reducers: {
    updateSearchResults(state,action){
      const newVideoList = action.payload

      if(newVideoList.length > 0){
        state.videoList= newVideoList
      }

    }
  }

})


export const watchSuggestionsActions = watchSuggestionsSlice.actions

export default watchSuggestionsSlice
