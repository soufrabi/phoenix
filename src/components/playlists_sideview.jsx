import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { videoPlayerInfoActions } from "../store/video-player-info";
import { pageActions } from "../store/page";
import { playlistsActions } from "../store/playlists.js"
import { nanoid } from "nanoid";

const PlaylistItem = (props) => {

  const dispatch = useDispatch()
  const handleClick = () => {
    // if (props.data.type === "video") {
    //   dispatch(videoPlayerInfoActions.updateVideoId({
    //     videoId: props.data.id
    //   }
    //   ))

    //   dispatch(pageActions.changePage("WATCH_PAGE"))

    // } else if (props.data.type === "channel") {
    //   console.log("Its a channel")
    // }

    // // same function is implemented in search_explore


  }

  return (
    <>
      <div>
        {props.data.name}
        {" " + "(" + props.data.type + ")"}
        <button onClick={handleClick}>Click </button>
      </div>
    </>
  )

}


const CreatePlaylistForm = (props) => {
  const [nameOfNewPlaylist, setNameOfNewPlaylist] = useState("")
  const dispatch = useDispatch()


  const handleInputChange = (event) => {
    setNameOfNewPlaylist(event.target.value)
  }

  const handleFormSubmit = (event) => {
    if(nameOfNewPlaylist.length > 0){
      console.log(nameOfNewPlaylist)
      dispatch(playlistsActions.addPlaylist({
        type: "custom",
        name: nameOfNewPlaylist,
        id: String("custom" + String(nanoid()))

      }
      ))
    }


    props.disableCreatePlaylist()


  }

  return (
    <>

      <form onSubmit={handleFormSubmit}>
        <input type="text" value={nameOfNewPlaylist} onChange={handleInputChange} placeholder="New PLaylist" size="30"
          style={{}} />

      </form>

    </>
  )



}


const AllPlaylistsWidget = (props) => {

  const playlists = useSelector((state) => state.playlists)

  return (
    <>

      <div style={{}}>
        {
          playlists.list.map((item) => {


            return (
              <PlaylistItem key={nanoid()} data={item} />

            )
          }
          ).reverse()


        }

      </div>

    </>

  )

}

const CurrentPlaylistWidget = (props) => {

  const handleAddCurrentVideo = ()=>{
      

  }

  return (
    <>
      <div>
        Current Playlist <br />

        <button type="button" onClick={handleAddCurrentVideo}>Add Current Video</button>
      </div>

    </>
  )


}


const PlaylistsSideview = (props) => {

  const dispatch = useDispatch()
  const [mode, setMode] = useState("ALL_PLAYLISTS")
  const [createPlaylist, setCreatePlaylist] = useState(false)

  const deleteAllPlaylists = ()=>{
    dispatch(playlistsActions.deleteAllPlaylists())

  }

  const enableCreatePlaylist = () => {
    setCreatePlaylist(true)
  }

  const disableCreatePlaylist = () => {
    setCreatePlaylist(false)
  }

  const changeModeToAllPlaylists = () => {
    setMode("ALL_PLAYLISTS")
    disableCreatePlaylist()
  }

  const changeModeToCurrentPlaylist = () => {
    setMode("CURRENT_PLAYLIST")
    disableCreatePlaylist()
  }


  return (

    <>
      <div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
          <button type="button" onClick={changeModeToAllPlaylists}>All Playlists</button>
          <button type="button" onClick={changeModeToCurrentPlaylist}>Current Playlist</button>
          <button type="button" onClick={enableCreatePlaylist}>Create Playlist</button>
          <button type="button" onClick={deleteAllPlaylists}>Delete All Playlists</button>
        </div>
        {createPlaylist && <CreatePlaylistForm disableCreatePlaylist={disableCreatePlaylist} />}

        {mode === "ALL_PLAYLISTS" && <AllPlaylistsWidget />}
        {mode === "CURRENT_PLAYLIST" && <CurrentPlaylistWidget />}

      </div>
    </>

  )

}

export { PlaylistsSideview }
