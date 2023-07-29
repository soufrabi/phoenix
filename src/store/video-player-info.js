import { createSlice } from "@reduxjs/toolkit";
import { savedConfig } from "./local-storage";

const videoPlayerInfoSlice = createSlice({

  name: 'videoPlayerInfo',
  initialState: {
    videoId: savedConfig.initialVideoId,
    videoUrl: "",
    videoThumbnailUrl: "",
    playerWidthVal: savedConfig.playerWidthVal,
    playerWidth: savedConfig.playerWidth,
    autoplay: savedConfig.autoplay,
    playerControls: savedConfig.playerControls
  },
  reducers: {
    updateVideoId(state, action) {
      const newVideoId = action.payload.videoId
      if (newVideoId.length > 5) {
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
        localStorage.setItem('playerWidthVal', state.playerWidthVal)
      }
    },

    decreasePlayerWidth(state) {
      if (state.playerWidthVal > 200) {
        state.playerWidthVal -= 100
        state.playerWidth = String(state.playerWidthVal) + "px"
        localStorage.setItem('playerWidthVal', state.playerWidthVal)
      }

    },

    saveAsInitialVideo(state) {
      localStorage.setItem('initialVideoId', state.videoId)

    },

    toggleAutoplay(state) {
      state.autoplay = !state.autoplay
      localStorage.setItem('autoplay', String(state.autoplay))

    },
    togglePlayerControls(state) {
      state.playerControls = !state.playerControls
      localStorage.setItem('playerControls', String(state.playerControls))

    },
  }
})

export const videoPlayerInfoActions = videoPlayerInfoSlice.actions

export default videoPlayerInfoSlice





