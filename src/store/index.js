import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice.js"
import cartSlice from "./cart-slice.js";
import watchSuggestionsSlice from "./watch-suggestions.js";
import videoPlayerInfoSlice from "./video-player-info.js";
import searchResultsExploreSlice from "./search-explore.js";
import pageSlice from "./page.js";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    page: pageSlice.reducer,
    watchSuggestions: watchSuggestionsSlice.reducer,
    videoPlayerInfo: videoPlayerInfoSlice.reducer,
    searchResultsExplore: searchResultsExploreSlice.reducer
  }

})

export default store
