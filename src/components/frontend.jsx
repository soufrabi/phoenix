
import React from "react";
import { useState } from "react";
import { TopBar } from "./top_bar";
import { VideoPlayer } from "./video_player";
import { WatchSuggestionsSideBar } from "./watch_suggestions.jsx"
import { styles } from "./styles";


const FrontEnd = () => {


  return (
    <div style={{}}>
      <TopBar />

      <div style={{ position: "absolute", top: "100px", border:"2px solid black"}}>
        <div style={{ display:"flex" ,flexDirection:"row"}}>
          <div style={{border:"2px groove black"}}>
            <VideoPlayer />
          </div>
          <div style={{border:"2px groove black"}}>
            <WatchSuggestionsSideBar />
          </div>
        </div>
      </div>
    </div>

  )

}


export { FrontEnd }
