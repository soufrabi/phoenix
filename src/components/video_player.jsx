
import React from "react";
import { useState, useEffect } from "react";
import { invidious_api } from "./../apis/index.js"
import { videoPlayerInfoActions } from "../store/video-player-info.js";
import { useSelector, useDispatch } from "react-redux";

const VideoPlayer = () => {

  const videoPlayerInfo = useSelector((state) => state.videoPlayerInfo)
  const dispatch = useDispatch()

  // const [videoUrl, setVideoUrl] = useState("Video URL ")
  // const [videoThumbnailUrl, setVideoThumbnailUrl] = useState("videoThumbnailUrl ")
  // const [playerWidth,setPlayerWidth] = useState("700px")


  const printVideoPlayerInfo = () => {
    console.log(videoPlayerInfo)

  }

  const fetchData = async () => {

    const videoInfo = await invidious_api.getVideoInfo(videoPlayerInfo.videoId)
    const invidious_video_url = videoInfo.videoUrl
    const invidious_video_thumbnail_url = videoInfo.videoThumbnailUrl

    // console.log("Inside VideoPlayer")
    // console.log("Value of videoUrl as obtained by the video player is " + invidious_video_url)
    // console.log("Value of videoThumbnailUrl as obtained by the video player is " + invidious_video_thumbnail_url)

    if (invidious_video_url.length > 5) {
      // setVideoUrl(invidious_video_url)
      dispatch(videoPlayerInfoActions.updateVideo({
        videoUrl: invidious_video_url,
        videoThumbnailUrl: invidious_video_thumbnail_url
      }
      ))
    }

    // if (invidious_video_thumbnail_url.length > 5) {
    // setVideoThumbnailUrl(invidious_video_thumbnail_url)
    // }


  }

  const increasePlayerSize = () => {
    dispatch(videoPlayerInfoActions.increasePlayerWidth())
  }

  const decreasePlayerSize = () => {
    dispatch(videoPlayerInfoActions.decreasePlayerWidth())
  }

  const saveAsInitialVideo = () => {
    dispatch(videoPlayerInfoActions.saveAsInitialVideo())
  }

  const toggleAutoplay = () => {
    dispatch(videoPlayerInfoActions.toggleAutoplay())
  }
  const togglePlayerControls = () => {
    dispatch(videoPlayerInfoActions.togglePlayerControls())
  }

  const copyVideoLinkToClipboard = () => {
    const link = videoPlayerInfo.videoUrl;
    navigator.clipboard.writeText(link)
  }

  const reloadButtonClicked = () => {
    console.log("Reload URL button clicked")

    fetchData()

  }


  useEffect(() => {

    fetchData()

  }, [videoPlayerInfo.videoId])


  return (
    <div style={{ display: "flex", flexDirection: "column" }} >

      <video controls={videoPlayerInfo.playerControls} autoPlay={videoPlayerInfo.autoplay} src={videoPlayerInfo.videoUrl} poster={videoPlayerInfo.videoThumbnailUrl} width={videoPlayerInfo.playerWidth} >
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href={videoPlayerInfo.videoUrl}>link to the video</a> instead.
        </p>
      </video>

      <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <button type="button" onClick={reloadButtonClicked}>Reload URL</button>
        <button type="button" onClick={printVideoPlayerInfo}>printVideoPlayerInfo</button>
        <button type="button" onClick={saveAsInitialVideo}>Save as Initial Video</button>
        <button type="button" onClick={increasePlayerSize}>Increase Player Size</button>
        <button type="button" onClick={decreasePlayerSize}>Decrease Player Size</button>
        <button type="button" onClick={toggleAutoplay}>Toggle Autoplay</button>
        <button type="button" onClick={togglePlayerControls}>Toggle Controls</button>
        <button type="button" onClick={copyVideoLinkToClipboard}>Copy Video Link to Clipboard</button>
      </div>


    </div>
  )

}

export { VideoPlayer }
