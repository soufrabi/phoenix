import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = (key) => {
  const retrieved = JSON.parse(localStorage.getItem(key));
  if (retrieved != null) {
    const data = JSON.parse(localStorage.getItem(key));
    console.log(data);
    return data
  } else {
    const data = {
      playerWidthVal: 700,
      playerWidth: "700px",
      autoplay: false,
      playerControls: true,
      muted: false,
    }

    return data
  }

}


const saveInLocalStorage = (key, data) => {

  localStorage.setItem(key, JSON.stringify(data));

}


const videoPlayerInfoSlice = createSlice({

  name: 'videoPlayerInfo',
  initialState: {
    videoId: "bUaHbs09sOo",
    videoUrl: "",
    videoThumbnailUrl: "",
    preferences: loadFromLocalStorage("playerPreferences")
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
      if (state.preferences.playerWidthVal < 2000) {
        state.preferences.playerWidthVal += 100
        state.preferences.playerWidth = String(state.preferences.playerWidthVal) + "px"
        saveInLocalStorage("playerPreferences", state.preferences)
      }
    },

    decreasePlayerWidth(state) {
      if (state.preferences.playerWidthVal > 200) {
        state.preferences.playerWidthVal -= 100
        state.preferences.playerWidth = String(state.preferences.playerWidthVal) + "px"
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
  }
})

export const videoPlayerInfoActions = videoPlayerInfoSlice.actions

export default videoPlayerInfoSlice





