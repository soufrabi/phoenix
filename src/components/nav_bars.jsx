import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { styles } from "./styles";
import { generalActions } from "../store/general";

const SideBarLeft = () => {

  const dispatch = useDispatch()
  const [width,setWidth] = useState('50px')
  // const [navItemOpacity,setNavItemOpacity] = useState('1')
  const [navItemDisplay,setNavItemDisplay] = useState("none")

  const handleToggleButton = () => {

    console.log("Toggle SideBarLeft")

    if (width === "50px"){
      setWidth("170px")
      // setNavItemOpacity('1')
      setNavItemDisplay('block')
    } else if( width === "170px"){
      setWidth("50px")
      // setNavItemOpacity('1')
      setNavItemDisplay('none')
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
          
          <li onClick={()=>{ dispatch(generalActions.changePage("HOME_PAGE"))}} >
            <i className="fa fa-home" />
            <span className="nav-item" style={{display:navItemDisplay}}>Home</span>

            <span className="tooltip">Home </span>
          </li>

          {/* <li>
            <i className="bx bxs-grid-alt" />
            <span className="nav-item" style={{display:navItemDisplay}}>Dashboard</span>

            <span className="tooltip">Dashboard </span>
          </li> */}

          <li onClick={()=>{ dispatch(generalActions.changePage("WATCH_PAGE"))}}>
            <i className="fa fa-youtube-play" />
            <span className="nav-item" style={{display:navItemDisplay}}>Watch</span>

            <span className="tooltip">Watch </span>
          </li>

          <li onClick={()=>{ dispatch(generalActions.changePage("PLAYLISTS_PAGE")) }}>

            <i className="bx bxs-playlist" />
            <span className="nav-item" style={{display:navItemDisplay}}>Playlists</span>

            <span className="tooltip">Playlists </span>
          </li>

          <li onClick={()=>{ dispatch(generalActions.changePage("HISTORY_PAGE") ) }}>
            <i className="bx bx-history" />
            <span className="nav-item" style={{display:navItemDisplay}} >History</span>

            <span className="tooltip">History</span>
          </li>

          <li onClick={()=>{ dispatch(generalActions.changePage("SETTINGS_PAGE"))}}>
            <i className="bx bxs-cog" />
            <span className="nav-item" style={{display:navItemDisplay}}>Settings</span>
         
            <span className="tooltip">Settings</span>
          </li>

          {/* <li onClick={()=>{handleLogout()}} >

            <i  className="bx bx-log-out" />
            <span className="nav-item" style={{display:navItemDisplay}} >Logout</span>

            <span className="tooltip">Logout</span>
          </li> */}

        </ul>

      </div>
    </>
  )
}


const BottomNavBar = ()=>{
    const dispatch = useDispatch()

    return (
        <div className="bottom-nav-bar">
            
            <ul>
              
              <li onClick={()=>{ dispatch(generalActions.changePage("HOME_PAGE"))}} >
                <i className="fa fa-home" />
                {/* <span className="nav-item" style={{display:navItemDisplay}}>Home</span> */}

                <span className="tooltip">Home </span>
              </li>

              {/* <li>
                <i className="bx bxs-grid-alt" />
                <span className="nav-item" style={{display:navItemDisplay}}>Dashboard</span>

                <span className="tooltip">Dashboard </span>
              </li> */}

              <li onClick={()=>{ dispatch(generalActions.changePage("WATCH_PAGE"))}}>
                <i className="fa fa-youtube-play" />
                {/* <span className="nav-item" style={{display:navItemDisplay}}>Watch</span> */}

                <span className="tooltip">Watch </span>
              </li>

              <li onClick={()=>{ dispatch(generalActions.changePage("PLAYLISTS_PAGE")) }}>

                <i className="bx bxs-playlist" />
                {/* <span className="nav-item" style={{display:navItemDisplay}}>Playlists</span> */}

                <span className="tooltip">Playlists </span>
              </li>

              <li onClick={()=>{ dispatch(generalActions.changePage("HISTORY_PAGE") ) }}>
                <i className="bx bx-history" />
                {/* <span className="nav-item" style={{display:navItemDisplay}} >History</span> */}

                <span className="tooltip">History</span>
              </li>

              <li onClick={()=>{ dispatch(generalActions.changePage("SETTINGS_PAGE"))}}>
                <i className="bx bxs-cog" />
                {/* <span className="nav-item" style={{display:navItemDisplay}}>Settings</span> */}
             
                <span className="tooltip">Settings</span>
              </li>

              {/* <li onClick={()=>{handleLogout()}} >

                <i  className="bx bx-log-out" />
                <span className="nav-item" style={{display:navItemDisplay}} >Logout</span>

                <span className="tooltip">Logout</span>
              </li> */}

            </ul>

        </div>

    )

}

export { SideBarLeft, BottomNavBar }
