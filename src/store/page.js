import { createSlice } from "@reduxjs/toolkit";


const pageSlice = createSlice({
  name: 'page',
  initialState : {
    type: "HOME_PAGE"
  },
  reducers: {
    changePage(state,action){
      const newPage = action.payload

      state.type = newPage

    }
  }

})


export const pageActions = pageSlice.actions

export default pageSlice
