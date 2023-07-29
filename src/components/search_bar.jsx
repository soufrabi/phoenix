import React from "react";
import { useState } from "react";
import { invidious_api } from "../apis";
import { watchSuggestionsActions } from "../store/watch-suggestions";
import { useSelector, useDispatch } from "react-redux";

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
      <form onSubmit={handleSearch}>
        <button type="submit" >Search</button>
        <input type="text" onChange={handleInputChange} />
      </form>
    </>
  )


}


export { SearchBar }
