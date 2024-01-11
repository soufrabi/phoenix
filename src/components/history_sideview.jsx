import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { videoPlayerInfoActions } from "../store/video-player-info";
import { generalActions } from "../store/general";
import { nanoid } from "nanoid";

const HistoryItem = (props) => {

  const dispatch = useDispatch()
  const handleClick = ()=> {
     if (props.data.type === "video") {
      dispatch(videoPlayerInfoActions.updateVideoId({
        videoId: props.data.id
      }
      ))

      dispatch(generalActions.changePage("WATCH_PAGE"))

    } else if (props.data.type === "channel") {
      console.log("Its a channel")
    }

    // same function is implemented in search_explore


  }

  return (
    <>
      <div>
        {props.data.id} <br />
        {props.data.type}
        <button onClick={handleClick}>Click </button>
      </div>
    </>
  )

}


const HistorySideview = (props) => {

  const history = useSelector((state) => state.history)

  return (

    <>
      <div style={{}}>
        {
          history.list.map((item)=>{
           

            return (
              <HistoryItem key={nanoid()} data={item} />

            )
          }
          ).reverse()
          

        }

      </div>
    </>

  )

}

export {HistorySideview}
