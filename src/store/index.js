import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authSlice from "./auth-slice.js"
import cartSlice from "./cart-slice.js";
import watchSuggestionsSlice from "./watch-suggestions.js";
import videoPlayerInfoSlice from "./video-player-info.js";
import searchResultsSlice from "./search-results.js";
import generalSlice from "./general.js";
import playlistsSlice from "./playlists.js";
import historySlice from "./history.js"
import debugSlice from "./debug.js";
import apiSlice from "./api.js"


const combinedReducers = combineReducers({
  api: apiSlice.reducer,
  auth: authSlice.reducer,
  cart: cartSlice.reducer,
  general: generalSlice.reducer,
  watchSuggestions: watchSuggestionsSlice.reducer,
  videoPlayerInfo: videoPlayerInfoSlice.reducer,
  searchResults: searchResultsSlice.reducer,
  playlists: playlistsSlice.reducer,
  history: historySlice.reducer,
  debug: debugSlice.reducer,

})

const rootReducer = (state, action) => {
  if(action.payload == "RESET"){
    console.log("RESET action")
  }

  if (action.payload == "PRINT_STATE"){
    console.log("PRINT_STATE action")
    console.log(state)
  }

  return combinedReducers(state,action)


}


const store = configureStore({
  reducer: rootReducer

})

export default store
