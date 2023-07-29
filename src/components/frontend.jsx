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
import "./style.css"
import "./homepage_style.css"
import "./video_player.css"
import "./side_bar_left.css"
import "./settings_page.css"
import { SideBarLeft } from "./side_bar_left";
import { SettingsPage } from "./settings_page";
import { ExplorePage } from "./explorer_page";



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
        <SideBarLeft />
        <div style={{marginLeft:"50px"}}>
          {page.type === "WATCH_PAGE" && <WatchPage />}
          {/* {page.type === "SEARCH_EXPLORE_PAGE" && <SearchExplore />} */}
          {page.type === "SEARCH_EXPLORE_PAGE" && <ExplorePage mode="search"/> }
          {page.type === "HISTORY_PAGE" && <ExplorePage mode="history" />}
          {page.type === "PLAYLISTS_PAGE" && <ExplorePage mode="playlists" />}
          {page.type === "HOME_PAGE" && <HomePage />}
          {page.type === "SETTINGS_PAGE" && <SettingsPage />}
        </div>
      </div>

    </div>

  )

}


export { FrontEnd }
