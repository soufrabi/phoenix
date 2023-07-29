import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice.js"
import cartSlice from "./cart-slice.js";
import watchSuggestionsSlice from "./watch-suggestions.js";
import videoPlayerInfoSlice from "./video-player-info.js";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    watchSuggestions: watchSuggestionsSlice.reducer,
    videoPlayerInfo: videoPlayerInfoSlice.reducer
  }

})

export default store
