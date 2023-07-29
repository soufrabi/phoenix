
import React from "react";
import { useState, useEffect } from "react";
import { invidious_api } from "./../apis/index.js"


const VideoPlayer = () => {

  const [videoUrl, setVideoUrl] = useState("Video URL ")
  const [videoThumbnailUrl, setVideoThumbnailUrl] = useState("videoThumbnailUrl ")

  const fetchData = async () => {

    const videoInfo = await invidious_api.getVideoInfo("Atq7VjVbaA8")
    const invidious_video_url = videoInfo.videoUrl
    const invidious_video_thumbnail_url = videoInfo.videoThumbnailUrl

    console.log("Inside VideoPlayer")
    console.log("Value of videoUrl as obtained by the video player is " + invidious_video_url)
    console.log("Value of videoThumbnailUrl as obtained by the video player is " + invidious_video_thumbnail_url)

    if (invidious_video_url.length > 5) {
      setVideoUrl(invidious_video_url)
    }

    if (invidious_video_thumbnail_url.length > 5) {
      setVideoThumbnailUrl(invidious_video_thumbnail_url)
    }


  }

  const reloadButtonClicked = () => {
    console.log("Reload URL button clicked")

    fetchData()

  }


  useEffect(() => {

    fetchData()

  }, [])


  return (
    <div>

      <video controls src={videoUrl}  poster={videoThumbnailUrl}>
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href={videoUrl}>link to the video</a> instead.
        </p>
      </video>

      <div>
        <p>Video URL : <span style={{ fontSize: "5px" }}>{videoUrl} </span> </p>
        <p>Video Thumbnail URL : <span style={{ fontSize: "5px" }}>{videoThumbnailUrl} </span> </p>
      </div>

      <button type="button" onClick={reloadButtonClicked}>Reload URL</button>


    </div>
  )

}

export { VideoPlayer }
