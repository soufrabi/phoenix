import { createSlice } from "@reduxjs/toolkit";

import { saveInLocalStorage, loadFromLocalStorage } from "./local_storage";


const debugSlice = createSlice({

  name: 'debug',
  initialState: {
    preferences: loadFromLocalStorage("debugPreferences", {
        debugMode:false,
    }
    )
  },
  reducers: {
    toggleDebugMode(state) {
        state.preferences.debugMode = !state.preferences.debugMode
        saveInLocalStorage("debugPereferences",state.preferences)
    },
    

  }
})

export const debugActions = debugSlice.actions

export default debugSlice





