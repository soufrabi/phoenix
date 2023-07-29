import React, { useDebugValue } from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { nanoid } from "nanoid"
import { styles } from "./styles"
import { videoPlayerInfoActions } from "../store/video-player-info"

const WatchSuggestionItem = (props) => {



  const dispatch = useDispatch()
  const updateVideoId = async () => {
    dispatch(videoPlayerInfoActions.updateVideoId({
      videoId: props.videoId
    }
    ))

  }

  return (
    <div>
      <button onClick={updateVideoId}>{props.title}</button>
    </div>
  )

}

const WatchSuggestionsSideBar = () => {

  const watchSuggestions = useSelector((state) => state.watchSuggestions)


  const printWatchSuggestions = () => {

    console.log("Watch Suggestions")
    console.log(watchSuggestions)
  }

  return (
    <div>

      <p>Watch Suggestions </p>

      <div style={{height:"1000px", overflow:"auto"}}>

        {
          watchSuggestions.videoList.map((item) => {
            // console.log(item)
            // console.log(item.videoId)
            return (
              <WatchSuggestionItem key={nanoid()} videoId={item.videoId} title={item.title} />
            )
          })
        }
      </div>

      <button onClick={printWatchSuggestions}>Print Watch Suggestions</button>
    </div>
  )

}


export { WatchSuggestionsSideBar }
