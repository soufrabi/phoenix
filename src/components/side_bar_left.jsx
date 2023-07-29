import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { styles } from "./styles";
import { pageActions } from "../store/page";

const SideBarLeft = () => {

  const dispatch = useDispatch()
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

  const gotoSettings = ()=> {

    console.log("Go to Settings button clicked")
    dispatch(pageActions.changePage("SETTINGS_PAGE"))
  }

  const gotoHomepage = ()=>{
    console.log("Go to HOMEPAGE button clicked")
    dispatch(pageActions.changePage("HOME_PAGE"))
  }

  const handleLogout = ()=> {

    console.log("Logout button clicked")

    var confirmation= confirm("Do you want to delete LocalStorage")

    if (confirmation) {
      console.log("Deleting Local Storage")
      localStorage.clear()
    } else {
      console.log("Not Deleting Local Storage")
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
          
          <li onClick={()=>{gotoHomepage()}} >
            <i className="fa fa-home" />
            <span className="nav-item" style={{opacity:navItemOpacity}}>Home</span>

            <span className="tooltip">Home </span>
          </li>

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

          <li onClick={()=>{gotoSettings()}}>
            <i className="bx bxs-cog" />
            <span className="nav-item" style={{opacity:navItemOpacity}}>Settings</span>
         
            <span className="tooltip">Settings</span>
          </li>

          <li onClick={()=>{handleLogout()}} >

            <i  className="bx bx-log-out" />
            <span className="nav-item" style={{opacity:navItemOpacity}} >Logout</span>

            <span className="tooltip">Logout</span>
          </li>

        </ul>

      </div>
    </>
  )
}

export { SideBarLeft }
