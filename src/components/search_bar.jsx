import React from "react";
import { useState } from "react";
import { invidious_api } from "../apis";
import { watchSuggestionsActions } from "../store/watch-suggestions";
import { searchResultsActions } from "../store/search-results"
import { useSelector, useDispatch } from "react-redux";
import { pageActions } from "../store/page";
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
      dispatch(searchResultsActions.updateSearchResults(invidiousSearchResults))
      dispatch(pageActions.changePage("SEARCH_EXPLORE_PAGE"))

    }

  }

  const handleInputChange = (event) => {

    // console.log(event.target.value)
    setSearchTerm(event.target.value)


  }


  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        <div id="phoenix-name">
          Phoenix
        </div>

        <form onSubmit={handleSearch}
          style={{
            display: "flex",
            flexDirection: "row",

          }}
        >
          <div
            onClick={handleSearch}
            style={{
              position: "relative",
              top: "0.9em",
              left: "1.65em",
              fontSize: "1.3em",
              color: "#777777",
            }}
          >
            <i className="fa fa-search"> </i>
          </div>

          <input 
            id="search-bar-input"
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search ..."
          >
          </input>

        </form>

        <div>
        </div>
      </div>
    </>
  )


}


export { SearchBar }
