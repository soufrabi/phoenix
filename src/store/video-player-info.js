import { createSlice } from "@reduxjs/toolkit";

import { saveInLocalStorage, loadFromLocalStorage } from "./local_storage";


const videoPlayerInfoSlice = createSlice({

  name: 'videoPlayerInfo',
  initialState: {
    videoId: "bUaHbs09sOo",
    videoUrl: "",
    videoStreams : [],
    audioStreams : [],
    videoStreamIndex : 0,
    audioStreamIndex : 0,
    description : "",
    videoThumbnailUrl: "",
    preferences: loadFromLocalStorage("playerPreferences", {
      playerWidthVal: 90,
      playerWidth: "90vw",
      autoplay: true,
      playerControls: false,
      muted: false,
      volume: "1",
      loop: true,
    }
    )
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
      state.videoStreams = newVideo.videoStreams
      state.audioStreams = newVideo.audioStreams
      state.videoStreamIndex = newVideo.videoStreams.length-1
      state.audioStreamIndex = newVideo.audioStreams.length-1
      state.videoUrl = newVideo.videoStreams[state.videoStreamIndex].url
      state.videoThumbnailUrl = newVideo.videoThumbnailUrl
      


    },
    increaseVideoQuality(state) {
      const n = state.videoStreams.length
      state.videoStreamIndex = (state.videoStreamIndex + 1)%n
      console.log(state.videoStreamIndex)
      state.videoUrl = state.videoStreams[state.videoStreamIndex].url
    },
    decreaseVideoQuality(state) {
      const n = state.videoStreams.length
      state.videoStreamIndex = (state.videoStreamIndex + n - 1 )%n
      console.log(state.videoStreamIndex)
      state.videoUrl = state.videoStreams[state.videoStreamIndex].url

    },
    
    updateVolume(state,action){
      const newVolume = action.payload
      state.preferences.volume = newVolume

      saveInLocalStorage("playerPreferences", state.preferences)

    },

    increasePlayerWidth(state) {
      if (state.preferences.playerWidthVal < 2000) {
        state.preferences.playerWidthVal += 5
        state.preferences.playerWidth = String(state.preferences.playerWidthVal) + "vw"
        saveInLocalStorage("playerPreferences", state.preferences)
      }
    },

    decreasePlayerWidth(state) {
      if (state.preferences.playerWidthVal > 20) {
        state.preferences.playerWidthVal -= 5
        state.preferences.playerWidth = String(state.preferences.playerWidthVal) + "vw"
        saveInLocalStorage("playerPreferences", state.preferences)
      }

    },

    toggleAutoplay(state) {
      state.preferences.autoplay = !state.preferences.autoplay
      saveInLocalStorage("playerPreferences", state.preferences)

    },
    togglePlayerControls(state) {
      state.preferences.playerControls = !state.preferences.playerControls
      saveInLocalStorage("playerPreferences", state.preferences)
    },
    toggleMute(state) {
      state.preferences.muted = !state.preferences.muted
      saveInLocalStorage("playerPreferences", state.preferences)
    },
    toggleLoop(state) {
      state.preferences.loop = !state.preferences.loop
      saveInLocalStorage("playerPreferences", state.preferences)
    },
  }
})

export const videoPlayerInfoActions = videoPlayerInfoSlice.actions

export default videoPlayerInfoSlice





