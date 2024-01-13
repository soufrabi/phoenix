import { createSlice } from "@reduxjs/toolkit";
import { isTouchEnabled,isOrientationPortrait } from "../utils/general.js"


const generalSlice = createSlice({
  name: 'general',
  initialState : {
    page: "HOME_PAGE",
    // orientationPortrait: false
    orientationPortrait: isOrientationPortrait(),
    touchEnabled: isTouchEnabled(),
  },
  reducers: {
    changePage(state,action){
      const newPage = action.payload

      state.page = newPage
    },
    updateOrientationPortrait(state,action){
        const newOrientation = action.payload
        state.orientationPortrait = newOrientation
    }
  }

})


export const generalActions = generalSlice.actions

export default generalSlice
