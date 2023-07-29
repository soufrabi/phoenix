import { createSlice } from "@reduxjs/toolkit";
import { invidious_api } from "../apis";

const videoPlayerInfoSlice = createSlice({

  name: 'videoPlayerInfo',
  initialState: {
    videoId:"AIYpdjQVidc",
    videoUrl: "",
    videoThumbnailUrl: "",
    playerWidthVal: 700,
    playerWidth: "700px"
  },
  reducers: {
    updateVideoId(state,action){
      const newVideoId = action.payload.videoId
      if(newVideoId.length > 5){
        state.videoId = newVideoId
      }

    },

    updateVideo(state, action) {
      const newVideo = action.payload
      state.videoUrl = newVideo.videoUrl
      state.videoThumbnailUrl = newVideo.videoThumbnailUrl

    },

    increasePlayerWidth(state) {
      if (state.playerWidthVal < 2000) {
        state.playerWidthVal += 100
        state.playerWidth = String(state.playerWidthVal) + "px"
      }
    },

    decreasePlayerWidth(state) {
      if (state.playerWidthVal > 200) {
        state.playerWidthVal -= 100
        state.playerWidth = String(state.playerWidthVal) + "px"
      }

    }
  }
})

export const videoPlayerInfoActions = videoPlayerInfoSlice.actions

export default videoPlayerInfoSlice





