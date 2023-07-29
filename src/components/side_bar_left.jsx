import React from "react";
import { useState } from "react";
import { styles } from "./styles";

const SideBarLeft = () => {

  const [width,setWidth] = useState('50px')
  const [navItemOpacity,setNavItemOpacity] = useState('0')

  const handleToggleButton = () => {

    console.log("Toggle SideBarLeft")

    if (width === "50px"){
      setWidth("170px")
      setNavItemOpacity('1')
    } else if( width === "170px"){
      setWidth("50px")
      setNavItemOpacity('0')
    }


  }


  return (
    <>
      <div className="side-bar-left" style={{width:width}}>

        <div className="top">
          <div className="toggle-button">
            <i onClick={() => { handleToggleButton() }} className="bx bx-menu" id="left-side-bar-toggle-btn" />
          </div>
        </div>

        <ul>
          <li>
            <i className="bx bxs-grid-alt" />
            <span className="nav-item" style={{opacity:navItemOpacity}}>Dashboard</span>

            <span className="tooltip">Dashboard </span>
          </li>

          <li>

            <i className="bx bxs-playlist" />
            <span className="nav-item" style={{opacity:navItemOpacity}}>Playlists</span>

            <span className="tooltip">Playlists </span>
          </li>

          <li>
            <i className="bx bx-history" />
            <span className="nav-item" style={{opacity:navItemOpacity}} >History</span>

            <span className="tooltip">History</span>
          </li>

          <li>

            <i className="bx bxs-cog" />
            <span className="nav-item" style={{opacity:navItemOpacity}}>Settings</span>

            <span className="tooltip">Settings</span>
          </li>

          <li>

            <i className="bx bx-log-out" />
            <span className="nav-item" style={{opacity:navItemOpacity}} >Logout</span>

            <span className="tooltip">Logout</span>
          </li>

        </ul>

      </div>
    </>
  )
}

export { SideBarLeft }
