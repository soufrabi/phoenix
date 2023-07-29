import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { pageActions } from "../store/page.js"
import { videoPlayerInfoActions } from "../store/video-player-info.js";

const SearchItem = (props) => {

  const dispatch = useDispatch()
  // const [imgWidth, setImageWidth] = useState(300)
  const [thumbnailUrl, setThumbnailUrl] = useState("")


  const handleImageClick = () => {

    if (props.data.type === "video") {
      dispatch(videoPlayerInfoActions.updateVideoId({
        videoId: props.data.videoId
      }
      ))

      dispatch(pageActions.changePage("WATCH_PAGE"))

    } else if (props.data.type === "channel") {
      console.log("Its a channel")
    }
  }
  
  const handleContexMenu = (e)=> {
    // for right clicking on image
    e.preventDefault()

  }

  useEffect(() => {

    if (props.data.type === "video") {
      // console.log("Video")
      if (props.data.videoThumbnails.length > 0) {
        setThumbnailUrl(props.data.videoThumbnails[0].url)
        // console.log(props.data.videoThumbnails[0].url)
      }
    } else if (props.data.type === "channel") {
      if (props.data.authorThumbnails.length > 0){
        setThumbnailUrl(props.data.authorThumbnails[0].url)
      }
    } else if (props.data.type === "playlist") {
      if (props.data.playlistThumbnail){
        setThumbnailUrl(props.data.playlistThumbnail)
      }
    }


  }, [])


  return (
    <>
      <div 
        onClick={handleImageClick}
        style={{ 
          background:"#363040", color:"white" ,
          border: "2px solid black", borderRadius: "25px",
          // padding: "5px", margin:"10px",
          overflow:"hidden",
          display:"flex", 
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          }}
      >

        <img 
          onContextMenu={handleContexMenu} 
          width="100%" 
          src={thumbnailUrl} 
          alt=""

          style={{
            maxHeight:"332px",
            maxWidth:"593px"
          }}
        />
        <p>
          {props.data.title} <br />
          {/* {props.data.videoId} <br /> */}
          {props.data.author} <br />
          {props.data.type}
        </p>

      </div>
    </>
  )

}

const ExplorePage = (props) => {

  // const searchResults = useSelector((state) => state.watchSuggestions.videoList)
  const searchResults = useSelector((state) => state.searchResults.searchResults)
  // will change this to searchResultsExplore 

  return (
    <>
      <div className="explore-page" 
        // style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap:"1em" , margin:"0.5em"}}
      >
        { props.mode === "search" &&
          searchResults.map((item) => {

            console.log(item)
            return (
              <SearchItem key={nanoid()} data={item} />
            )
          })
        }

        { props.mode === "history" &&
          searchResults.map((item) => {

            console.log(item)
            return (
            //   <SearchItem key={nanoid()} data={item} />
                <div key={nanoid()}>
                    History  
                </div>
            )
          })
        }

        { props.mode === "playlists" &&
          searchResults.map((item) => {

            console.log(item)
            return (
              // <SearchItem key={nanoid()} data={item} />
                <div key={nanoid()}>
                    Playlists
                </div>
            )
          })
        }
      </div>
    </>
  )

}


export { ExplorePage }
