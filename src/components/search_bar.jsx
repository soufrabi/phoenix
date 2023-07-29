import React from "react";
import { useState } from "react";
import { invidious_api } from "../apis";
import { watchSuggestionsActions } from "../store/watch-suggestions";
import { searchResultsActions } from "../store/search-results"
import { useSelector, useDispatch } from "react-redux";
import { pageActions } from "../store/page";


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
      <form onSubmit={handleSearch}
        style={{
          display: "flex",
          flexDirection: "row",

        }}
      >
        <div
          id="search-bar-search-icon"
          onClick={handleSearch}
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
    </>
  )


}


export { SearchBar }
