import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { TopBar } from "./top_bar";
import { VideoPlayer } from "./video_player";
// import { WatchSuggestionsSideBar } from "./watch_suggestions.jsx"
// import { SearchExplore } from "./search_explore";
import { HomePage } from "./homepage.jsx"
// import { HistorySideview } from "./history_sideview.jsx"
// import { PlaylistsSideview } from "./playlists_sideview.jsx"
import { styles } from "./styles";
import "../styles/style.css"
import "../styles/homepage_style.css"
import "../styles/video_player.css"
import "../styles/side_bar_left.css"
import "../styles/settings_page.css"
import { SideBarLeft } from "./side_bar_left";
import { SettingsPage } from "./settings_page";
import { ExplorePage } from "./explorer_page";
import { generalActions } from "../store/general.js";


const WatchPage = () => {

  return (

    <div style={{ border: "2px solid black" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ border: "2px groove black" }}>
          <VideoPlayer />
        </div>
        {/* <div style={{ border: "2px groove black" }}> */}
        {/*   <PlaylistsSideview /> */}
        {/*   {/1* <WatchSuggestionsSideBar /> *1/} */}
        {/*   {/1* <HistorySideview /> *1/} */}
        {/* </div> */}
      </div>
    </div>
  )
}

const FrontEnd = () => {

  const page = useSelector((state) => state.page)
  console.log(page)

  return (
    <div style={{ marginTop: styles.topBar.height, paddingTop: "1em" }}>
      <TopBar />

      <div style={{ display: "flex" }}>
      {!general.orientationPortrait && <SideBarLeft />}
        <div style={{marginLeft: !general.orientationPortrait ? "50px" : "0px"}}>
          {general.page === "WATCH_PAGE" && <WatchPage />}
          {general.page === "SEARCH_EXPLORE_PAGE" && <ExplorePage mode="search"/> }
          {general.page === "HISTORY_PAGE" && <ExplorePage mode="history" />}
          {general.page === "PLAYLISTS_PAGE" && <ExplorePage mode="playlists" />}
          {general.page === "HOME_PAGE" && <HomePage />}
          {general.page === "SETTINGS_PAGE" && <SettingsPage />}
        </div>
      </div>

    </div>

  )

}


export { FrontEnd }
