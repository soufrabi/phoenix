import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { generalActions } from "../store/general"
import { videoPlayerInfoActions } from "../store/video-player-info.js";
import { searchResultsActions } from "../store/search-results.js";
import { invidious_api } from "../apis/index.js";

const explorerStyle = {
    item: {
        background: "#363040", color: "white",
        border: "2px solid black", borderRadius: "25px",
        // padding: "5px", margin:"10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        maxHeight: "332px",
        maxWidth: "593px",

    },
}

const SearchItem = (props) => {

    const dispatch = useDispatch()
    // const [imgWidth, setImageWidth] = useState(300)
    const [thumbnailUrl, setThumbnailUrl] = useState("")


    const handleImageClick = async (ev) => {
        ev.preventDefault()

        switch (props.data.type) {

            case "video":
                dispatch(videoPlayerInfoActions.updateVideoId({
                    videoId: props.data.videoId
                }))

                dispatch(generalActions.changePage("WATCH_PAGE"))
                break;
            case "playlist":
                console.log("Clicked on a playlist image")
                const playlistResult = await invidious_api.getPlaylistInfo(props.data.playlistId)
                console.log("Playlist Result : ", playlistResult)
                dispatch(searchResultsActions.updatePlaylist(playlistResult))
                dispatch(generalActions.changePage("PLAYLIST_VIEW_PAGE"))
                break;

            case "channel":
                console.log("Clicked on a channel image")
                break;
            default:
                console.log("Unknown Search Result")
        }
    }

    useEffect(() => {

        if (props.data.type === "video") {
            // console.log("Video")
            if (props.data.videoThumbnails.length > 0) {
                setThumbnailUrl(props.data.videoThumbnails[0].url)
                // console.log(props.data.videoThumbnails[0].url)
            }
        } else if (props.data.type === "channel") {
            if (props.data.authorThumbnails.length > 0) {
                setThumbnailUrl(props.data.authorThumbnails[0].url)
            }
        } else if (props.data.type === "playlist") {
            if (props.data.playlistThumbnail) {
                setThumbnailUrl(props.data.playlistThumbnail)
            }
        }


    }, [])


    return (
        <>
            <div
                onClick={handleImageClick}
                style={explorerStyle.item}
            >

                <img
                    onContextMenu={(ev) => { ev.preventDefault() }} // to disable right clicking on image
                    width="100%"
                    src={thumbnailUrl}
                    alt="thumbnail"

                    style={explorerStyle.img}
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

const PlaylistViewItem = (props) => {

    const dispatch = useDispatch()

    const handleImageClick = (ev) => {
        ev.preventDefault()

        dispatch(videoPlayerInfoActions.updateVideoId({
            videoId: props.video.videoId
        }))

        dispatch(generalActions.changePage("WATCH_PAGE"))

    }

    return (
        <>
            {/* <div> {JSON.stringify(props.video)} </div> */}
            <div style={explorerStyle.item}>
                <img
                    width="100%"
                    onContextMenu={(ev) => (ev.preventDefault())}
                    onClick={handleImageClick}
                    src={props.video.title === "[Deleted video]" ? "" : props.video.videoThumbnails[0].url}
                    alt="thumbnail"

                    style={explorerStyle.img}
                />
                <p>
                    {props.video.title}&nbsp;
                    [{Math.round(props.video.lengthSeconds / 60)}min] <br />
                    [{props.video.author}]

                </p>
            </div>

        </>

    )
}

const ExplorePage = (props) => {

    // const searchResults = useSelector((state) => state.watchSuggestions.videoList)
    const searchResults = useSelector((state) => state.searchResults.searchResults)
    const playlistResult = useSelector((state) => state.searchResults.playlistResult)
    // will change this to searchResultsExplore

    return (
        <>
            <div className="explore-page"
            // style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap:"1em" , margin:"0.5em"}}
            >
                {props.mode === "search" &&
                    searchResults.map((item) => {

                        console.log(item)
                        return (
                            <SearchItem key={nanoid()} data={item} />
                        )
                    })
                }

                {props.mode === "history" &&
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

                {props.mode === "playlists" &&
                    searchResults.map((item) => {

                        console.log(item)
                        return (
                            // <SearchItem key={nanoid()} data={item} />
                            <div key={nanoid()}>
                                Playlists
                                <PlaylistViewItem />
                            </div>
                        )
                    })
                }


                {props.mode === "playlist_view" &&
                    playlistResult.videos.filter((item) => {
                        return item.title !== "[Deleted video]"

                    }).map((item) => {

                        console.log(item)
                        return (
                            // <SearchItem key={nanoid()} data={item} />
                            <div key={nanoid()}>
                                <PlaylistViewItem video={item} />

                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}


export { ExplorePage }
