import React from "react";
import { useState } from "react";
import { invidious_api } from "../apis";
import { watchSuggestionsActions } from "../store/watch-suggestions";
import { useSelector, useDispatch } from "react-redux";
import "./style.css"


const SearchBar = (props) => {

  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = async (e) => {

    e.preventDefault()

    console.log("Search results for : " + searchTerm)

    if (searchTerm.length > 0) {

      const invidiousSearchResults = await invidious_api.getSearchResults(searchTerm)
      console.log("Search result as obtained by the Search Bar")
      console.log(invidiousSearchResults)

      dispatch(watchSuggestionsActions.updateSearchResults(invidiousSearchResults))

    }

  }

  const handleInputChange = (event) => {

    // console.log(event.target.value)
    setSearchTerm(event.target.value)


  }


  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <form onSubmit={handleSearch}>
          <button type="submit" style={{ background: "#3B3B4F", color: "white" }}>
            <svg className="ais-SearchBox-submitIcon" alt="Search" xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 40 40">
              <path style={{ fill: "white", stroke: "white" }} d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
            </svg>
          </button>
          <input type="text" onChange={handleInputChange} placeholder="Search" size="40"
            style={{ background: "#3B3B4F", color: "white", outline:"none", paddingLeft:"5px"}} />

        </form>
        <div style={{ color: "white", fontSize: "1.5em", fontFamily: "monospace", textAlign: "center" }}>
          Phoenix
        </div>
        <div>
        </div>
      </div>
    </>
  )


}


export { SearchBar }
