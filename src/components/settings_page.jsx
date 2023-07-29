import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {debugActions} from "../store/debug"

const SettingsPage = ()=> {
    const dispatch = useDispatch() 
    const handleToggleDebugMode = ()=>{
        console.log("Toggle Debug Mode pressed")
        dispatch(debugActions.toggleDebugMode())
    }

    const handleDeleteAllLocalStorage = ()=>{
        const confirmation= confirm("Do you want to delete all LocalStorage")

        if (confirmation) {
          console.log("Deleting Local Storage")
          localStorage.clear()
        } else {
          console.log("Not Deleting Local Storage")
        }
    }

    return (
        <>
            <div>

                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridTemplateColumns: "1fr 1fr 1fr" }} >
                    <button onClick={ ()=> {}}>Settings Generic Button</button>
                    <button onClick={ ()=> {handleToggleDebugMode() }}>Toggle Debug Mode</button>
                    <button onClick={ ()=> {handleDeleteAllLocalStorage() }}>Delete All Local Storage</button>
                </div>
            </div>
        </>

    )

}

export {SettingsPage}