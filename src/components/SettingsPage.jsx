import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debugActions } from "../store/debug"
import { invidious_api } from "../apis/index.js"



const InvidiousSelector = () => {
    const [selectedValue, setSelectedValue] = useState(invidious_api.getInvidiousInstance());

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        invidious_api.setInvidiousInstance(event.target.value)
    };


    const invidious_instances = invidious_api.getInvidiousInstances()
    // const invidious_instances = [
    //     "Instance 1",
    //     "Instance 2",
    //     "Instance 3",
    //     // Add more instances as needed
    // ];

    return (
        <div>
            <h2>Select Invidious Instance</h2>
            <select value={selectedValue} onChange={handleSelectChange}>
                {/* <option value="">Select an instance</option> */}
                {invidious_instances.map((instance, index) => (
                    <option key={index} value={instance}>
                        {instance}
                    </option>
                ))}
            </select>
            <p>Current Instance : {selectedValue}</p>
        </div>
    );
};


const SettingsPage = () => {
    const dispatch = useDispatch()
    const handleToggleDebugMode = () => {
        console.log("Toggle Debug Mode pressed")
        dispatch(debugActions.toggleDebugMode())
    }


    const handleDeleteAllLocalStorage = () => {
        const confirmation = confirm("Do you want to delete all LocalStorage")

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

                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridTemplateColumns: "1fr 1fr" }} >
                    <button onClick={() => { handleToggleDebugMode() }}>Toggle Debug Mode</button>
                    <button onClick={() => { handleDeleteAllLocalStorage() }}>Delete All Local Storage</button>
                </div>
                <div>
                    <InvidiousSelector />

                </div>
            </div>
        </>

    )

}

export { SettingsPage }
