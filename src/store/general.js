import { createSlice } from "@reduxjs/toolkit";


const generalSlice = createSlice({
  name: 'general',
  initialState : {
    page: "HOME_PAGE",
    // orientationPortrait: false
    orientationPortrait: window.matchMedia("(orientation:portrait)").matches
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
